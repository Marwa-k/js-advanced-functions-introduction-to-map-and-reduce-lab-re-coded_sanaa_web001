// Your code here
let arr=[];
let x=0;
function mapToNegativize(arr)
{
  return arr.map(n=>n * -1);
}

function mapToNoChange(arr)
{
  return arr.map(n=>n);
}

function mapToDouble(arr)
{
  return arr.map(n=>n *2);
}


function mapToSquare(arr)
{
  return arr.map(n=>n *n);
}

function reduceToTotal(arr)
{
const sum= arr.reduce(function (result, item) {  return result + item;});
  return sum;
}
function reduceToTotal(arr,x)
{
 const sum= arr.reduce(function (result, item) {  return result + item;},x);
  return sum ;
}



function reduceToAnyTrue(arr,search)
{
  return arr.reduce((items, value) => items && Boolean(search(value)), true);

}
