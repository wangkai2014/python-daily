print ((i**2 for i in range(10)))
print ([i**2 for i in range(10)])
import itertools
l="sfsdfssgdshjhj"
print dir(itertools.chain)
i= itertools.chain(l)
while True:
	try:
		print i.next()
	except StopIteration:
		print "error"
		break


