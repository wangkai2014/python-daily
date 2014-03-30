#!/usr/bin/env python
# -*- coding: utf-8 -*-
# wangkai2014@gmail.com   2014-03-11 20:35:39

'''
In python,the decorator is its syntax.Similar as the AOP in java,you can do something like entry and exit points function,such as perform some kind of security,tracing,locking etc.
'''
impot os
#entry_exit
class entry_exit(oject):
    def __init__(self,f):
        selfi.f=f
    def __call__(self):
        s=os.path.usr
