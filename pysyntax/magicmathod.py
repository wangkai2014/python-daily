#!/usr/bin/env python
# coding=utf-8
# Copyright@wangkai2014@gmail.com 2014-03-12 08:17:15

import pdb
pdb.set_trace()
class magicmethod(object):

    #def __new__(self):
        #print self.__new__

    def __init__(self):
        self.values={}
#
    #def __cmp__(self, other):
        #return len(self) > len(other)

    def __str__(self):
        return "__str__ is called "

    def __repr__(self):
        return "__repr__ is called "

    def __unicode__(self):
        return "__unicode__ is called"

    def __dir__(self):
        return list("ssds")

    def __getattr__(self, name):
        return self.__dict__[name]

    def __setattr__(self, name, value):
        '''dont't name=value  ,raised recursive error'''
        self.__dict__[name]=value

    def doc(self):
        '''dsfdsfsd'''
        pass

    def __len__(self):
        return len(self.values)

    def __setitem__(self,name,value):
        self.values[name]=value

    def __getitem__(self,name):
        return self.values[name]

    def __delitem__(self,name):
        del self.values[name]

    def __iter__(self):
        return iter(self.values)

    def __reversed__(self):
        return reversed(self.values)



t = magicmethod()
print t
print repr(t)
print str(t)
print unicode(t)
print dir(t)
t.a = "attr"
print t.a
print t.__dict__
print magicmethod.doc.__doc__
t['k']="sss"
a=[i for i in t]
print a
print len(t)
