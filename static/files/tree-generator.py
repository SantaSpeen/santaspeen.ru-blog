import os

def print_tree(dir_path, prefix=''):
    items = os.listdir(dir_path)
    items.sort(key=lambda x: (os.path.isfile(os.path.join(dir_path, x)), x))

    for index, item in enumerate(items):
        full_path = os.path.join(dir_path, item)
        is_last = index == len(items) - 1

        if os.path.isdir(full_path):
            print(f"{prefix}{'` -- ' if is_last else '| -- '}{item}")
            print_tree(full_path, prefix + ('    ' if is_last else '|   '))
        else:
            print(f"{prefix}{'` -- ' if is_last else '| -- '}{item}")


print_tree('.')
