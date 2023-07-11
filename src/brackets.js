const Stack = require("./lib/stack");

const match = (expression) => {
  console.log("expression is",expression)
   const stack=new Stack()
    for(let i=0;i<expression.length;i++){
        if(expression[i]==="("
          ||expression[i]==="["
          ||expression[i]==="{"){
            stack.push(expression[i])
        }
        if(stack.top){
          if(expression[i]===")"&&stack.top.value==="("
          ||expression[i]==="}"&&stack.top.value==="{"
          ||expression[i]==="]"&&stack.top.value==="["){
            stack.pop()
          }
          }else{
            if(expression[i]===")"
            ||expression[i]==="}"
            ||expression[i]==="]"){
              return false
            }
          }  
      }
  
    if(!stack.top){
        return true
    }else{
        return false
    }
}

module.exports = match;
