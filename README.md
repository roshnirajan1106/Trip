Learning JSON server
1. First of all set the root property and we can have multiple root property for different resources
2. All json data inside strings
3. each resource ,diffrent api endpoint.
4. How to setup a json server via command line
    -> json-server --watch data/db.json --port 8000
------------------------------------------------
1. useState-> whenever state changes , component re evaluates
2. useEffects runs only when one of its dependices has been changed.
3. After component reevaulation , function and variables,objects, arrays are treated diffrent to previous version even though they both are exactly same but they're allocated diffrent memory
4.  we can ignore this problem in functions by using hook called useCallback hook ,which weve to wrap it around the our async function and it will make a cast of that function , which will not allow the function to re-create itself whenever component re evaluates.
5.  useCallback has a dependency array too when to create a new version of the function
6.  The function we use in useEffect cannot be async but all the function inside of the function of useEffect can be async 
7.  Call such function inside useEffect.
8.  export data object and import this hook in main component const {data} = useFetch();
9.  If you're exporting a default value dont use curly braces
-----------------------------------------------
TRY AND CATCH BLOCK

try{
    //code
}
catch(err)
{
    //code
}
1. this catches only network error , if any changes in endpoint then it'll still send response
2. to tackle with other error , check if response.ok == false 
3. if false then throw a new error.
4. new Error(res.statusText);
5. Now this will be catched by catch block
------------------------------------------------
Need of a cleanup function 
1. Problem- Asynchronously updating the state after is it unmounted.
2. lets say we use hide button to hide some content, now after refreshing the page the data loads and and then we click on hide button while the data fetch is taking place.
3. So we'll get a warning which says state update on unmounted one.
4. for this we need cleanup function
5. Clean up function will run , when component using useEffect hook unmounts
6. for this make use of abort controller
7. First of all call abortController function inside useFetch and associate with the fetch request we're making
8. Abort it in clean up function
9. This will throw an error
------------------------------------------------
Useref
1. whenever any value changes inside useEffect, it imp that we add it in dependency array
2. passing refernce type like object
3. example : {type:'GET'}
4. Now after passing this in useEffect - infinite loop because object- reference type
5. useeffect sees refernce types as changed value once component re-evaulated
6. USE useRef to wrap an object/array argument which is a useEffect dependency
