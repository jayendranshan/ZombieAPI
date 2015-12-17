# ZombieTransAPI - Assignment4

### Main URL

`http://localhost:3000/`


## Zombify text

### URL

`http://localhost:7000/zombify`

### Resource Information

* Response format: JSON

### Sample URL for zombify

`http://localhost:7000/zombify?inputtext=APRIL`

### Sample JSON
~~~
{
	'status' : 200,
	'message' : 'OK',
	'text' : 'frrrRrrrrRrbhraRR'
}
~~~


#### Missing strings

Missing `src` values return a 200 but with the error in the `text` parameter.

`http://localhost:7000/zombify?src=`

~~~
OUTPUT: 414-InputnotPassed
~~~

## GET unzombify

Translates text into English

### Resource URL

`http://localhost:7000/unzombify`

### Resource Information

* Response format: JSON

### Parameters

* `src`: A string to be translated, up to 1,000 characters. If the string is greater than 1,000 characters, then a 414 error returned with `null` for the result.

### Example Valid Requestst

`http://localhost:7000/unzombify?inputtext=hrrr`

### Example Valid Result
~~~
{
	'status' : 200,
	'message' : 'OK',
	'text' : 'aeee'
}
~~~


#### Missing strings

Missing `src` values return a 200 but with the error in the `text` parameter.

`http://localhost:7000/unzombify?src=`

~~~
{
	OUTPUT:414-InputnotPassed
}
~~~

#### Input more than 1000

~~~
{
	OUTPUT:414-Inputlengthbiggerthan1000
}
~~~
