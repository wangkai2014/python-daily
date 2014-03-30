#!/usr/bin/env python
# coding=utf-8
# Copyright@wangkai2014@gmail.com 2014-03-13 14:07:47

class util():
    def __init__(self):
        pass
    @classmethod
    def dir(self,obj):
        return '\n'.join(dir(obj))
