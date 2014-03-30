#!/usr/bin/env python
# coding=utf-8
# Copyright@wangkai2014@gmail.com 2014-03-13 15:09:41

def f():
    pass
print f.func_code
print dir(f.func_code)
for attr in dir(f.func_code) :
    method=getattr(f.func_code,attr)
    if callable(method):
        pass
    else:
        print "attr %s : %5s" % (attr,' '),method

