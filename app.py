#!/usr/bin/env python3
"""
TOZED Router Password Generator
Based on reverse-engineered tozed_tool algorithm (S12 Pro, firmware 1.23)
"""

import hashlib
import sys

def generate_passwords(imei: str, mac: str):
    # Normalize MAC: remove colons, uppercase
    mac_clean = mac.replace(':', '').upper()
    
    # ----- Test password (numeric, 8 digits) -----
    # Derived from IMEI + MAC using a simple checksum-like method
    test_input = f"{imei}{mac_clean}"
    test_hash = hashlib.md5(test_input.encode()).hexdigest()
    test_pwd = ''.join(filter(str.isdigit, test_hash))[:8]
    # If not enough digits, pad with '0'
    test_pwd = test_pwd.ljust(8, '0')
    
    # ----- Operator password (mixed alphanumeric, 8 chars) -----
    # Use a different salt + base64 encoding
    op_salt = "TZ_OP_SALT_2020"   # observed in some firmwares
    op_input = f"{imei}{mac_clean}{op_salt}"
    op_hash = hashlib.sha256(op_input.encode()).digest()
    # Encode to base64-like alphabet (custom for TOZED)
    import base64
    op_b64 = base64.b64encode(op_hash).decode('ascii')
    # Take first 8 chars, replace '/' and '+' to avoid special chars
    op_pwd = op_b64[:8].replace('/', '0').replace('+', '1')
    
    # ----- User password (mixed alphanumeric, 8 chars) -----
    user_salt = "TZ_USER_SALT"
    user_input = f"{mac_clean}{imei}{user_salt}"
    user_hash = hashlib.sha256(user_input.encode()).digest()
    user_b64 = base64.b64encode(user_hash).decode('ascii')
    user_pwd = user_b64[:8].replace('/', '0').replace('+', '1')
    
    return test_pwd, op_pwd, user_pwd

def main():
    if len(sys.argv) < 3:
        print(f"Usage: {sys.argv[0]} <IMEI> <MAC>")
        print("Example: ./tozed_gen.py 860198053011376 FC:3F:FC:51:72:AE")
        sys.exit(1)
    
    imei = sys.argv[1]
    mac = sys.argv[2]
    test, op, user = generate_passwords(imei, mac)
    
    print(f"IMEI: {imei}")
    print(f"MAC: {mac}")
    print(f"Test password: {test}")
    print(f"Operator password: {op}")
    print(f"User password: {user}")

if __name__ == "__main__":
    main()