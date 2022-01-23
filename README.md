Learning JSON server
1. First of all set the root propertyand we can have multiple root property for differnt resources
2. All json data inside strings
3. each resource ,diffrent api endpoint.
4. How to setup a json server via command line
    -> json-server --watch .data/db.json --port 8000

------------------------------------------------
USE EFFECT
1. whenever usestate updates a state the component is Revaluated
2. In case of updating the data, which we got from fetch function using useState , it recompiles the component.
3. This will call the fetch function infinite number of times
4. To tackle this issue we make use of USEEFFECT HOOK , which will change perform side effects and will recompile only a particular component.
5. Side effect - is some kind of code , which runs in relation to a component.
6. We dont store the return value of useEffect , we just invoke it
7. Two components -> a function , dependency array
8. useEffect gonna run only when a particular state changes
9. if the dependency array is empty then , use effect gonna run only once at the start
10. adding a query to URL
    url?queryname=queryvalue