const Queue=require("./lib/queue")
const binary = (max) => {
  const queue=new Queue()
  queue.enqueue("1")
  const result=[]
  for(let i=1;i<=max;i++){
    let n =queue.dequeue()
    result.push(n)
    queue.enqueue(n+"0")
    queue.enqueue(n+"1")
  }
  return result
};

module.exports = binary;
