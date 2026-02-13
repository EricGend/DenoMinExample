#include <iostream>
#include <math.h>
using namespace std;


extern "C" {
    int add2numbers(int a, int b ){

            return a + b ;
    }

    int multipli2numbers(int a, int b){
        return a * b;
    }

    int power2(int a) {
      return pow(a,2);
    }
}

// int main() {
//     // This statement prints "Hello World"
//     cout << "Hello World" << endl;
//     cout << to_string(add2numbers(1, 2) ) << endl ;
//     cout << to_string (multipli2numbers(2,2)) << endl;
//     cout << to_string (power2(9)) << endl;
//     return 0;
// }
