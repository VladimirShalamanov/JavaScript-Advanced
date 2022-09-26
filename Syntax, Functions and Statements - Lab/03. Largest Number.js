function soul(x, y, z)
{
    let result;
    if (x >= y && x >= z)
    {
        result = x;
    }
    else if (y >= x && y >= z)
    { 
        result = y;
    }
    else
    {   
        result = z;
    }

    console.log(`The largest number is ${result}.`);
}

soul(-3, -5, -22.5);