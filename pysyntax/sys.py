#!/usr/bin/env python
# coding=utf-8
# Copyright@wangkai2014@gmail.com 2014-03-13 16:52:49

import sys
print sys.argv
print sys.api_version
print sys.builtin_module_names
print sys.byteorder
print sys.copyright
print sys.__displayhook__
print sys.dont_write_bytecode
#print sys.dllhandle
print sys.exec_prefix
print sys.executable
print sys.flags
print sys.exc_info()
print sys.maxunicode
print sys.modules
print sys.path
print sys.platform
print dir(sys.stdin)
f=sys._getframe()
import types
print isinstance(f,types.FrameType)
