// // new operatorü ile nesne oluşturma
// var info = {name: "Felix",
//             surname : "Dupain", 
//             age: 27,
//         };

// // object
// console.log(info);          // { name: 'Felix', surname: 'Dupain', age: 27 }   

// // object properties
// console.log(info.name);     // Felix   
// console.log(info.surname);  // Dupain
// console.log(info.age);      // 27
 

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// // new operatorü ile nesne oluşturma
// var info = new Object();
// console.log(info);      // {}

// info.name = "Felix";
// info["surname"] = "Dupain";
// info.age = 27;
// console.log(info);      // { name: 'Felix', surname: 'Dupain', age: 27 }


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// // fonksiyon şeklinde nesne tanımlama ve nesneyi çağırma

// // constructor type 1
// function info() 
// {
//     this.name = "Rai";
//     this.surname = "Shi";
//     this.age = 24;
// }

// var info_obj = new info();
// console.log(info_obj);      // info { name: 'Rai', surname: 'Shi', age: 24 }

// // constructor type 2
// var info2 = function()
// {
//     this.name = "felix";
//     this.surname = "dupain";
//     this.age = 24;
// }

// var info_obj2 = new info2();
// console.log(info_obj2);      // info { name: 'felix', surname: 'dupain', age: 24 }


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// nesnelerde özellik ve değer atamalarında tırnak işaretlerinin kullanımı

// var info = {'name': "Felix",
//             'surname' : "Dupain", 
//             'age': 27,
//         };
// // "" ya da '' kullanmanın bir önemi yok sadece property namelerinde tırnak arasında kullanılabileceği gösterildi.
// console.log(info);      // { name: 'Felix', surname: 'Dupain', age: 27 }


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// tek bir ifadeyle birden fazla nesne tanımlama

// var obj = {a:1, b:2}, obj2 = {"a":3, "b":4};

// console.log(obj);       // { a: 1, b: 2 }  
// console.log(obj2);      // { a: 3, b: 4 }      


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// // bir nesneyi başka bir değişkene aktarma

// var info = {'name': "Felix",
//             'surname' : "Dupain", 
//             'age': 27,
//         };

// var info_copy = info;

// console.log(info_copy);     // { name: 'Felix', surname: 'Dupain', age: 27 }


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// // nesneyi önceden tanımlayıp özellik ve değerleri sonradan atama

// var info = {};
// info.name = "rai shi";
// info.age = 85;
// console.log(info);              // { name: 'rai shi', age: 85 }


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// // nesneleri dizi olarak görüp herhangi bir özelliğin değerine ulaşma

// var letters = {"a":1, b:2, "c":3, "d":4};

// console.log(letters.a);     // 1
// console.log(letters["a"]);  // 1

// console.log(letters.b);     // 2
// console.log(letters["b"]);  // 2


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// nesneye ait bir özelliğin değerinin değiştirilmesi

// var info = {'name': "Felix", 'surname' : "Dupain", 'age': 27};
// console.log(info);  // { name: 'Felix', surname: 'Dupain', age: 27 }

// info.name = "Rai";
// info.age = "24";
// console.log(info);  // { name: 'Rai', surname: 'Dupain', age: '24' }


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// nesne içerisinde fonksiyon tanımlama ve fonksiyonu çağırma

// var info = {
//     name: "Felix",
//     age: 27,
    
//     getName : function()
//     {
//         return this.name;
//     },
//     setName : function(name)
//     {
//         this.name = name;
//         // info.name = name;
//     } 

// };

// console.log(info.getName()); // Felix
// info.setName("Rai");
// console.log(info.getName()); // Rai


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// // obje fonksiyonu içinde objeye ait değişken tanımlama
// var info = {
//     name: "Felix",
//     surname: "Dupain",
    
//     setAge : function(age = 27)
//     {
//         this.age = age;
//     }
// };

// console.log(info.age); // undefined
// info.setAge();
// console.log(info.age); // 27


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// // nesnelerin kapsama alanı

// // fakat böyle çok hoş değil
// // var name = "felix";
// // var date = 1998;

// var name_ = "felix";
// var date_ = 1998;

// var info = {
//     name: name_,
//     date : date_
// };

// var info2 = {
//     name: "Rai",
//     date : 2000
// };

// console.log(info.name + " " + info.date); // felix 1998
// console.log(info2.name + " " + info2.date); // Rai 2000 


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// // özellikleri tanımlanmış nesneye yeni özellik tanımlama

// letters = { "a":1, "b":2 };
// console.log(letters);       // { a: 1, b: 2 }

// letters.c = 3;
// console.log(letters);       // { a: 1, b: 2, c: 3 }

// letters.func = function()
// {
//     letters.d = "4";
//     // this.d = "4"; 
// }
// console.log(letters);       // { a: 1, b: 2, c: 3, func: [Function (anonymous)] }

// letters.func();
// console.log(letters);       // { a: 1, b: 2, c: 3, func: [Function (anonymous)], d: '4' }


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// // fonksiyon nesnelerinin metodlarına parametre tanımlama

// function Info(_age, _name = "name", _surname = "surname") {
//     this.name       = _name;
//     this.surname    = _surname;
//     this.age        = _age;

//     this.setAge = function (age = 0) {
//         this.age = age;
//     };
// }

// var info_obj = new Info(56);
// console.log(info_obj);
// /*
// Info {
//   name: 'name',
//   surname: 'surname',
//   age: 56,
//   setAge: [Function (anonymous)]
// }
// */
// var info_obj2 = new Info(24, "Rai", "Shi");
// console.log(info_obj2);
// /*
// Info {
//   name: 'Rai',
//   surname: 'Shi',
//   age: 24,
//   setAge: [Function (anonymous)]
// }
// */
// info_obj2.setAge();
// console.log(info_obj2);
// /*
// Info {
//   name: 'Rai',
//   surname: 'Shi',
//   age: 0,
//   setAge: [Function (anonymous)]
// }
// */
// info_obj2.setAge(25);
// console.log(info_obj2);
// /*
// Info {
//   name: 'Rai',
//   surname: 'Shi',
//   age: 25,
//   setAge: [Function (anonymous)]
// }
// */


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// // nesnelerde for in döngüsü

// var info = {name    : "Felix",
//             surname : "Dupain", 
//             age     : 27,
//             job     : "Musician",
//             city    : "Marseille",
//             getName : function() { return this.name}
//         };

// for (var property in info)
// {
//     if (typeof info[property] == 'function') 
//     {
//         console.log("\n");
//         console.log(property + " -> " + info[property] +" (" + typeof property + " -> " + typeof info[property] + ")");
//     }
//     else 
//     {
//         console.log(property + " -> " + info[property] +" (" + typeof property + " -> " + typeof info[property] + ")");
//     }
// }
// /*
// name -> Felix (string -> string)
// surname -> Dupain (string -> string)
// age -> 27 (string -> number)
// job -> Musician (string -> string)
// city -> Marseille (string -> string)


// getName -> function() { return this.name} (string -> function)
// */


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// // nested object

// var info = {name        : "Felix",
//     surname     : "Dupain", 
//     age         : 27,
//     job         : "Musician",
//     city        : "Marseille",
//     instrument  : {
//         percussive  : ["drums", "tambour"],
//         string      : ["guitar", "ukulele"],
//         keyboard    : ["piano", "harp"],
//     },
//     getName     : function() { return this.name}
// };

// console.log(info);

// for (property in info)
// {
// console.log(property + " -> " + info[property] +" (" + typeof property + " -> " + typeof info[property] + ")");
// }

// console.log(info.instrument.keyboard[0]); // piano

// /*
// {
// name: 'Felix',
// surname: 'Dupain',
// age: 27,
// job: 'Musician',
// city: 'Marseille',
// instrument: {
// percussive: [ 'drums', 'tambour' ],
// string: [ 'guitar', 'ukulele' ],
// keyboard: [ 'piano', 'harp' ]
// },
// getName: [Function: getName]
// }
// name -> Felix (string -> string)
// surname -> Dupain (string -> string)
// age -> 27 (string -> number)
// job -> Musician (string -> string)
// city -> Marseille (string -> string)
// instrument -> [object Object] (string -> object)
// getName -> function() { return this.name} (string -> function)
// piano
// */


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// // nesnelerde delete metodu


// var info = {name        : "Felix",
//     surname     : "Dupain", 
//     age         : 27,
//     job         : "Musician",
//     city        : "Marseille",
//     instrument  : {
//         percussive  : ["drums", "tambour"],
//         string      : ["guitar", "ukulele"],
//         keyboard    : ["piano", "harp"],
//     },
//     getName     : function() { return this.name}
// };

// console.log("before");
// console.log(info);

// delete info.instrument;
// console.log("\ninstrument deleted");
// console.log(info);

// delete info.age;
// console.log("\nage deleted");
// console.log(info);
// console.log(info.age); // undefined 
// // özellik silinmiyor değeri siliniyor !!!!!!!


// delete info;
// console.log("\ninfo deleted");
// console.log(info);

// // yazılımlarda hata oluşmasını engellemek için önce değer silinir ardından değer güncellenir.

// /*
// before
// {
// name: 'Felix',
// surname: 'Dupain',
// age: 27,
// job: 'Musician',
// city: 'Marseille',
// instrument: {
// percussive: [ 'drums', 'tambour' ],
// string: [ 'guitar', 'ukulele' ],
// keyboard: [ 'piano', 'harp' ]
// },
// getName: [Function: getName]
// }

// instrument deleted
// {
// name: 'Felix',
// surname: 'Dupain',
// age: 27,
// job: 'Musician',
// city: 'Marseille',
// getName: [Function: getName]
// }

// age deleted
// {
// name: 'Felix',
// surname: 'Dupain',
// job: 'Musician',
// city: 'Marseille',
// getName: [Function: getName]
// }

// info deleted
// {
// name: 'Felix',
// surname: 'Dupain',
// job: 'Musician',
// city: 'Marseille',
// getName: [Function: getName]
// }
// */


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// // prototip özelliği

// // Info constructor
// function Info(name, surname, age, city)
// {
//     this.name       = name;
//     this.surname    = surname;
//     this.age        = age;
//     this.city       = city;
// }
// // prototip yapısı sayesinde Info özellikleri görüntülenebilir, etki edilebilir
// Info.prototype.Hello = function()
// {
//     return this.name + " " + this.surname + " " + this.age + " " + this.city + " created.";
// }

// // info_obj inherited from Info
// var info_obj = new Info("Rai" ,"Shi", 24, "Samsun");

// console.log(info_obj.Hello()); // Rai Shi 24 Samsun created.


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// // proto özelliği
// // __proto__
// // bir nesnenin prototip nesnesini elde etmek için kullanılıyor
// // ve prototip nesnesi içindeki özelliklere ulaşarak onları geri döndürmeyi sağlıyor
    
// function Info(name, surname, age, city)
// {
//     this.name       = name;
//     this.surname    = surname;
//     this.setAge     = function(age=0) { this.age = age; };
// }
// Info.prototype.Hello = function()
// {
//     return this.name + " " + this.surname + " created.";
// }

// Info.prototype.setCity = function(city="neverland")
// {
//     // nesnelerin prototip nesnesi içinde bir özellik
//     // doğrudan erişilemez
//     this.city = city;
// }

// var info_obj = new Info("Rai" ,"Shi");

// console.log(info_obj.Hello());              // Rai Shi created.
// console.log("age -> " + info_obj.age);      // age -> undefined
// console.log("city -> " + info_obj.city);    // city -> undefined

// info_obj.setAge();
// console.log("age -> " + info_obj.age);      // age -> 0

// info_obj.setCity();
// console.log("city -> " + info_obj.city);    // city -> neverland
// console.log(info_obj.__proto__.city);       // undefined

// // böyle de çalışıyor fakat bazı tarayıcılarda sıkıntı çıkabilir
// // __proto__ ile erişmekte fayda var

// info_obj.__proto__.setCity("Edingburgh");
// console.log("city -> " + info_obj.city);    // city -> neverland
// console.log(info_obj.__proto__.city);       // Edingburgh


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// // hasOwnProperty()
// // her yapıda çalışabilir
// // bir nesnenin paramterik olarak girilenn özelliğinin kullanılıp kullanılmadığını kontrol ederek boolean değer döner.

// var info = {name: "Felix",
//             surname : "Dupain", 
//             age: 27,
//         };

// var isName = info.hasOwnProperty("name");
// console.log(isName); // true

// var isCity = info.hasOwnProperty("city");
// console.log(isCity); // false


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// // propertyIsEnumerable
// // bir nesne içindeki özelliğin var olup olmadığı ve numaralandırılabilir (iterable) olup olmadığı kontrol edilir

// var info = {name: "Rai",
//     surname : "Shi", 
//     age: 27,
//     languages : ["Python", "Javascript", "Typescript", "C#", "C++", "R"],
// };

// var myArray = [1,2,3]

// var isName = info.propertyIsEnumerable("name");
// console.log(isName);        // true

// var isAge = info.propertyIsEnumerable("age");
// console.log(isAge);         // true

// var isLanguages = info.propertyIsEnumerable("languages");
// console.log(isLanguages);   // true

// console.log(myArray.propertyIsEnumerable());            // false
// console.log(myArray.propertyIsEnumerable(myArray));     // false
// console.log(myArray.propertyIsEnumerable(myArray[0]));  // true


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// // isPrototypeOf()
// // parametrik olarak girilen nesne prototip zincirinde bir constructor bulunup bulunmadığını kontrol ederek boolean değeri geri döndürür

// function Info()
// {
//     this.name ="bidi";
// }

// var info_obj = new Info();

// var result = Info.prototype.isPrototypeOf(info_obj); // info_obj nesnesinin constructor metodu Info mu?
// console.log(result); // true


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// // instanceof()
// // bir nesnenin constructorının doğruluğunu kontrol eder ve boolean değer geri döndürür.

// function Class1()
// {
//     this.name ="class1";
// }

// function Class2()
// {
//     this.name ="class2";
// }

// var obj = new Class1();

// var result1 = obj instanceof Class1;
// console.log(result1); // true

// var result2 = obj instanceof Class2;
// console.log(result2); // false


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// // nesnelerde constructor özelliğinin kullanımı
// // nesnenin constructorını elde etmek için kullanılır ve constructorın değerini geriye döndürür.
// // ayrıca kontrol işlemleri içinde kullanılabilir

// function Info()
// {
//     this.name ="bidi";
// }

// var info_obj = new Info();

// var className = info_obj.constructor;

// console.log(className);             // [Function: Info]

// console.log(className + " -> " + typeof className); 
// /*
// function Info()
// {
//     this.name ="bidi";
// } -> function
// */
// console.log(typeof className);      // function

// console.log(typeof className == 'function');  // true
// console.log(info_obj.constructor == Info);    // true


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// // watch()
// // nesnenin belirtilen bir özelliği değiştirildiğinde çalıştırılacak olan herhangi bir işlev eklemek için kullanılır.
// // watch(property_name, property_old_value, property_new_value)

// function Info()
// {
//     this.name ="bidi";
// }

// // bu özellik sadece eski firefox sürümleri için çalışıyor
// // javascript üreticisi mozilla
// // dolayısıyla yazılımlarda tarayıcı yakalanarak tarayıcıya göre bu işlem yaptırılabilir.

// Info.watch("name", 
//     function(property_name, property_old_value, property_new_value){
//         var name        = property_name;
//         var old_value   = property_old_value;
//         var new_value   = property_new_value;
//         var text = name + " changed from " + old_value + " to " + new_value;
//         alert(text); 
//     });
// Info.name = "vidi";


// // unwatch()
// // watch ile eklenmiş olan işlevi kaldırmak için kullanılır
// Info.unwatch("name");


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// // toString()
// // nesnenin karakter dizesi olarak temsil edilen halinin değerini geri döndürür
// // nesne prototype özelliği kullanılarak değer ataması yapılabilir

// var Info = {name:"bidi2"};
// console.log(Info.toString()); // [object Object]


// function Info2()
// {
//     this.name ="bidi";
// }
// var info_obj = new Info2();
// console.log(info_obj.toString()); // [object Object]


// function Info3()
// {
//     this.name ="bidi3";
//     console.log(this.name); // bidi3
// }
// var info_obj2 = new Info3();
// console.log(info_obj2.toString()); // [object Object]

// // !!!!!!!!!!!!!!!!!!!
// function Info4()
// {
//     this.name ="bidi4";
// }
// Info4.prototype.toString = function () { return ("Hello this is " + this.name); };
// var info_obj3 = new Info4();
// console.log(info_obj3.toString()); // Hello this is bidi4


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// // toLocaleString()
// // nesnenin tarayıcı lokasyonu/diline göre karakter dizesi olarak temsil edilen halinin değerini geriye döndürür.
// // nesne değeri üzerinden tarayıcı lokasyonuna / diline göre özel işlemler yapabilir.

// var value = {name:"object_name"};
// console.log(value.toLocaleString());                // [object Object]
// console.log(value.toLocaleString("en-US"));         // [object Object]

// // sayısal değerlerde obje olarak algılanabilir ve üzerinde işlemler gerçekleştirebiliriz.
// var numValue = 1500;
// console.log(numValue.toLocaleString());             // 1.500 
// console.log(numValue.toLocaleString("en-US"));      // 1,500 
// console.log(numValue.toLocaleString("tr-TR", {style:"currency", currency:"TRY"}));      // ₺1.500,00
// console.log(numValue.toLocaleString("en-US", {style:"currency", currency:"USD"}));      // $1,500.00
// console.log(numValue.toLocaleString("ja-JP", {style:"currency", currency:"JPY"}));      // ￥1,500

// numValue = 1552;
// // maximumSignificantDigits default max value is 21
// console.log(numValue.toLocaleString("tr-TR", {style:"currency", currency:"TRY", maximumSignificantDigits:2}));      // ₺1.600

// // minimumSignificantDigits default max value is 21
// console.log(numValue.toLocaleString("tr-TR", {style:"currency", currency:"TRY", minimumSignificantDigits:10}));      // ₺1.552,000000


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// // toSource()
// // nesnenin kaynak kodunu temsil eden halinin değerini geriye döndürür. 
// // sadece Mozilla Firefox üzerinde çalışıyor
// // eski sürümlerde çalışıyor
// var Info = { name:"object_name", value:0 };
// console.log(Info.toSource())


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// valueOf()
// nesnenin temel değerini elde etmek için kullanılır
// nesnenin temel değeri demek prototip nesne demektir

function ClassName(num)
{
    this.value = num;
}
var obj = new ClassName(0);
var result = obj.valueOf();
console.log(result); // ClassName { value: 0 }
// derste [object Object] çıktısı alındı

// temel değerini değiştirebiliriz
ClassName.prototype.valueOf = function() { return this.value; }
console.log(obj.valueOf()); // 0