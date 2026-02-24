void greet({String? name, required int? age}) {
  //named paramaters m age mandatory h as required lagaya h
  print("Name: $name, Age : $age");
}

void main() {
  greet(name: "Yuvika", age: 15);
}
