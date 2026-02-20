import {simpleWebUi, webViewApp} from "./webViewApp.ts";

export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
  testCPlusPLusLib();

  startWebView()
}

function startWebView(){
  simpleWebUi()
}

export function testCPlusPLusLib(){

  const lib = Deno.dlopen(
    "./c++Logic/denoTestLib.so",  
    {
      add2numbers: { parameters: ["i32", "i32"], result: "i32" },
      multipli2numbers: { parameters: ["i32", "i32"], result: "i32" },
      power2: { parameters: ["i32"], result: "i32" }
    }
  );

  console.log("Add:", lib.symbols.add2numbers(3, 4));        
  console.log("Multiply:", lib.symbols.multipli2numbers(3, 4)); 
  console.log( "Power a number by 2:", lib.symbols.power2(3)); //nutzt die Math lib in c++

  lib.close();
}

