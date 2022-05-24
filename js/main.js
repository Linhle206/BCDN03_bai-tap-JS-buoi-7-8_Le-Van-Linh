var Z = [];
var printNum = "";
function enterZ() {
    var num = Number(document.getElementById("num").value);
    if (num == Math.floor(num)) {
        Z.push(num);
        printNum += num + ", ";
        document.querySelector(".inputZ p").innerHTML = printNum;
    } else {
        document.querySelector(".inputZ p").innerHTML = printNum + "<br>Số bạn vừa nhập không phải là số nguyên, vui long nhập lại";
    }
}

function sumP() {
    var sum = 0;
    for (var i = 0; i < Z.length; i++) {
        if (Z[i] > 0) {
            sum += Z[i];
        }
    }
    if (sum == 0) {
        document.querySelector(".sumP p").innerHTML = "Mảng không có số dương ";
    } else {
        document.querySelector(".sumP p").innerHTML = "Tổng các số dương: " + sum;
    }
}

function countP() {
    var count = 0;
    for (var i = 0; i < Z.length; i++) {
        if (Z[i] > 0) count += 1;
    }
    if (count == 0) {
        document.querySelector(".countP p").innerHTML = "Mảng không có số dương ";
    } else {
        document.querySelector(".countP p").innerHTML = "Số các số dương: " + count;
    }
}

function findMin() {
    var min = Z[0];
    for (var i = 0; i < Z.length - 1; i++) {
        if (min > Z[i + 1]) min = Z[i + 1];
    }
    document.querySelector(".findMin p").innerHTML = "Số nhỏ nhất: " + min;
}

function findPMin() {
    var min = 0;
    for (var i = 0; i < Z.length; i++) {
        if (Z[i] > 0) {
            min = Z[i];
            for (var j = 0; j <= Z.length; j++) {
                if (Z[j] > 0 && min > Z[j]) min = Z[j];
            }
        }
    }
    if (min == 0) {
        document.querySelector(".findPMin p").innerHTML = "Mảng không có số dương ";
    } else {
        document.querySelector(".findPMin p").innerHTML = "Số dương nhỏ nhất: " + min;
    }
}

function findLastEven() {
    var LEven = -1;
    for (var i = Z.length - 1; i >= 0; i--) {
        if (Z[i]%2 == 0) {
            LEven = Z[i];
            document.querySelector(".findLastEven p").innerHTML = "Số chẵn cuối cùng: " + LEven;
            return LEven;
        }
    }
    document.querySelector(".findLastEven p").innerHTML = "Mảng không có số chẳn"
    return LEven;
}

function comparePN() {
    var p = 0;
    var n = 0;
    for (var i = 0; i < Z.length; i++) {
        if (Z[i] > 0) p++;
        if (Z[i] < 0) n++;
    }
    if (p > n) {
        document.querySelector(".comparePN p").innerHTML = "Số lượng số dương lớn hơn số lượng số âm"
    } else if (p < n) {
        document.querySelector(".comparePN p").innerHTML = "Số lượng số âm lớn hơn số lượng số dương"
    } else {
        document.querySelector(".comparePN p").innerHTML = "Số lượng số dương bằng số lượng số âm"
    }
}

function findFirstPrime() {
    for (var i = 0; i < Z.length; i++) {
        var c = 0;
        for (var j = 1; j <= Z[i]; j++) {
            if (Z[i] % j == 0) {
                c++;
            }
        }
        if (c < 3 && c != 0) {
            document.querySelector(".findFirstPrime p").innerHTML = "Số nguyên tố đầu tiên là: " + Z[i];
            return Z[i];
        }
    }
    document.querySelector(".findFirstPrime p").innerHTML = "Trong mảng không có số nguyên tố "
    return -1;
}

var printNumR = "";
var R = [];
function enterR() {
    var num1 = Number(document.getElementById("num1").value);
    R.push(num1);
    printNumR += num1 + ", ";
    document.querySelector(".inputR p").innerHTML = printNumR;
    console.log(R);
}

function countZ() {
    var count = 0;
    for (var i = 0; i < R.length; i++) {
        if (R[i] == Math.floor(R[i])){
            count++;
        }
    }
    document.querySelector(".printCount").innerHTML = "Số số nguyên: " + count;

}

function change2Num() {
    var temp = 0;
    var n1 = Number(document.getElementById("num2").value);
    var n2 = Number(document.getElementById("num3").value);
    if ((n1 < Z.length && n1 >= 0) && (n2 < Z.length && n2 >= 0 )) {
        temp = Z[n1];
        Z[n1] = Z[n2];
        Z[n2] = temp;
        document.querySelector(".inputZ p").innerHTML = "Mảng sau khi đổi vị trí 2 số: " + Z;
        return;
    } else {
        document.querySelector("..inputZ p").innerHTML = "Vui lòng nhập đúng vị trí của số cần đổi trong mảng";
        return;
    }
}

function sortUp() {
    for (var i = 0; i < Z.length; i++) {
        for (var j = 0; j < Z.length - 1; j++) {
            if (Z[j] > Z[j+1]) {
                var temp = Z[j];
                Z[j] = Z[j+1];
                Z[j+1] = temp; 
            }
        }
    }
    document.querySelector(".inputZ p").innerHTML = "Mảng sau khi được sắp xếp: " + Z;
    
}