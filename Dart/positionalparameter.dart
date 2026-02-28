class Calculator{
  int add(int a, int b, [int c=0]){
    return a+b+c;
  }
}

void main(){
  print(Calculator().add(2,3));
  print(Calculator().add(2,3,4));
}