#!/usr/bin/env python
# coding=utf-8
# Copyright@wangkai2014@gmail.com 2014-03-12 13:52:23
'''
math function g(f(x))===> python function  @g @f x()
----------------------
@decorator1(argC,argD)
@decorator(argA,argB)
def func(arg1,arg2)
    pass
----equals-----
decorator(argC,argD)(decorator(argA,argB)(func(arg1,arg2)))
decorator is called after
'''
import time
def deco_functionNeedDoc(func):
    if func.__doc__ == None :
        time.sleep(5)
        print func, "has no __doc__, it's a bad habit."
    else:
        time.sleep(5)
        print func, ':', func.__doc__, '.'
    return func
@deco_functionNeedDoc
def f():
    time.sleep(5)
    print 'f() Do something'
@deco_functionNeedDoc
def g():
    '''I have a __doc__'''
    time.sleep(5)
    print 'g() Do something'
f()
g()


