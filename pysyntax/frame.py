#!/usr/bin/env python
# coding=utf-8
# Copyright@wangkai2014@gmail.com 2014-03-13 14:34:18

import sys
import pdb
def test():
    frame = sys._getframe(1)
    pdb.set_trace()

class Test(object):
    a = 1
    b = 'hello'
    c = (12, 3.45)
    test()
    d = "This won't show up in the frame"
