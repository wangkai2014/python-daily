#!/usr/bin/env python
# coding=utf-8
# Copyright@wangkai2014@gmail.com 2014-03-13 14:05:22

from util import util
print dir(util)
import gc
print gc.get_count()
#print gc.get_objects()
print gc.get_threshold()
import inspect
print util.dir(inspect)
def func(a,b,c='s',*args,**kwargs):
    pass
print inspect.getargspec(func)
print inspect.currentframe()
print inspect.formatargspec(inspect.getargspec(func))
import marshal
script="print 'hello' "
code=compile(script,'<string>','exec')
data=marshal.dumps(code)
print repr(data)
code=marshal.loads(data)
import time
time.sleep(2)
exec(code)
