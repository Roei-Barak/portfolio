# import hashlib

# def md5_hash(text):
#     return hashlib.md5(str(text).encode()).hexdigest()

# target_hash = "4d1cf71aec011c7c6c3a2e69224f0e93"

# # Try all 4-digit numbers
# for i in range(10000):
#     # Format number to ensure 4 digits (e.g., 0001, 0002, etc.)
#     num = f"{i:04d}"
#     current_hash = md5_hash(num)
    
#     if current_hash == target_hash:
#         print(f"Found match! The number is: {num}")
#         print(f"Hash: {current_hash}")
#         break
    
#     # Print progress every 1000 attempts
#     if i % 1000 == 0:
#         print(f"Trying numbers in range {i}-{i+999}...")
