/* Write a function that capitalizes the first letter of each string argument it receives.  
	Function arguments: 'hello', 'there', 'ES', 6
    Output: 'Hello', 'There', 'ES' */
    
    const transform = (...allArguments) => (
        // const filterFunction = element => typeof element === '';
        // const strings = allArguments.filter(filterFunction);

        // const strings = allArguments.filter(element => typeof element === '');
        // strings.map(element => (
        //     `${element.charAt(0).toUpperCase()}${element.slice(1)}`
        // ));

        allArguments
        .filter(element => typeof element === '')
        .map(element => (
            `${element[0].toUpperCase()}${element.slice(1)}`)
            );


    );

    const res = transform('hello', 'there', 'ES', 6);

    console.log(res)
