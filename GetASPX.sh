#!/bin/bash
curl https://www.bsd.ufl.edu/dining/Hours/RegularHours.aspx >> hoursn.txt
H='./hours.txt'
N='./hoursn.txt'

Cc=$(shasum -a 512 $H | rev)
Nn=$(shasum -a 512 $N | rev)

echo $Cc
echo $Nn
if [ $Cc -eq $Nn ]
then
    rm -f $N
fi