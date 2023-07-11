const Stack = require("./lib/stack")
const Queue = require("./lib/queue")
const evaluate = (expression) => {
  //use queue, iterate expression ,if not "+-*/" push the operand to this stack, if meet an operator than use the last two items from the stack do calculate
  //store calculation into a variable result
  const arr = expression.replace(/\s/g,"").split("")
  const queue = new Queue()
  let result=null
  for(let i=0;i<arr.length;i++){
    let item=arr[i]
    if(item.match(/[a-zA-Z0-9]/g)){
      queue.enqueue(item)
    }else{
      if(result===null){
        let num1=queue.dequeue()
        let num2=queue.dequeue()
        result=eval(num1+arr[i]+num2)
      }else{
        let num=queue.dequeue()
        result=eval(num+arr[i]+result)
      }
    }
  }
  return result
}
module.exports = evaluate;
