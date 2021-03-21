#!/bin/bash
curl https://www.bsd.ufl.edu/dining/Hours/RegularHours.aspx >> hoursn.txt
H = './hours.txt'
N = './hoursn.txt'

Cc = shasum -a 512 H
Nn = shasum -a 512 N
if [ $Cc == $Nn]
then
    rm -f N
fi