// Cấu trúc dữ liệu cơ bản


//Bài tập: Quản lý danh sách sinh viên
// Mục tiêu: Tạo một danh sách sinh viên với các chức năng thêm, xóa, cập nhật GPA và hiển thị danh sách.
let student = [{
    name: "Nguyen Van A",
    age: 20,
    gpa: "3.5"
},
{
    name: "Nguyen Van B",
    age: 22,
    gpa: "3.8"
},
];

function addStudent(name, age, gpa) {
    student.push({
        name: name,
        age: age,
        gpa: gpa
    });
}

function removeStudent(name) {
    student = student.filter(s => s.name !== name);
}

function updateGpa(name, newGpa) {
    const studentToUpdate = student.find(s => s.name === name);
    if (studentToUpdate) {
        studentToUpdate.gpa = newGpa;
    }
}

class none {
    constructor(name, age, gpa) {
        this.date = { name, age, gpa };
        this.text = null;
    }
}

class Linkedin {
    constructor() {
        this.head = null;
    }

    add(name, age, gpa) {
        const newNode = new none(name, age, gpa);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.text) {
                current = current.text;
            }
            current.text = newNode;
        }
    }

    remove(name) {
        if (!this.head) return;
        if (this.head.date.name === name) {
            this.head = this.head.text;
            return;
        }
        let current = this.head;
        while (current.text && current.text.date.name !== name) {
            current = current.text;
        }
        if (current.text) {
            current.text = current.text.text;
        }
    }

    updateGpa(name, newGpa) {
        let current = this.head;
        while (current) {
            if (current.date.name === name) {
                current.date.gpa = newGpa;
                return;
            }
            current = current.text;
        }
    }

    display() {
        let current = this.head;
        while (current) {
            console.log(`Name: ${current.date.name}, Age: ${current.date.age}, GPA: ${current.date.gpa}`);
            current = current.text;
        }
    }
}

console.log("Initial student list:");
addStudent("Nguyen Van C", 21, "3.6");
console.log("Danh sách sinh viên khi thêm", student);
updateGpa("Nguyen Van B", "3.9");
console.log("Sau khi cập nhật GPA của Nguyen Van B", student);
removeStudent("Nguyen Van B");
console.log("Danh sách sinh viên sau khi xóa Nguyen Van B", student);

console.log("=== Sử dụng danh sách liên kết ===");
let studenLisst = new Linkedin();
studenLisst.add("Nguyen Van A", 20, "3.5");
studenLisst.add("Nguyen Van B", 22, "3.8");
studenLisst.add("Nguyen Van C", 21, "3.6");
console.log("Danh sách sinh viên ban đầu:");
studenLisst.display();
studenLisst.updateGpa("Nguyen Van B", "3.9");
console.log("Sau khi cập nhật GPA của Nguyen Van B:");
studenLisst.display();
studenLisst.remove("Nguyen Van B");
console.log("Danh sách sinh viên sau khi xóa Nguyen Van B:");
studenLisst.display();
console.log("=== Kết thúc chương trình ===");
studenLisst.display();


// 2. Thuật toán sắp xếp
// Bài tập: Quản lý danh sách điểm sinh viên

let scores = [85, 92, 78, 90, 88];

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Trả về chỉ số của phần tử tìm thấy
        }
    }
    return -1; // Trả về -1 nếu không tìm thấy
}

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid; // Trả về chỉ số của phần tử tìm thấy
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1; // Trả về -1 nếu không tìm thấy
}

function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Hoán đổi arr[j] và arr[j + 1]
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = partition(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

function partition(arr, left, right) {
    const pivot = arr[right];
    let i = left - 1;

    for (let j = left; j < right; j++) {
        if (arr[j] <= pivot) {
            i++;
            // Hoán đổi arr[i] và arr[j]
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    // Hoán đổi arr[i + 1] và arr[right] (pivot)
    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    return i + 1;
}


console.log("Danh sách điểm sinh viên ban đầu:", scores);   
let targetScore = 90;
let lineResult = linearSearch(scores, targetScore);
console.log(`Kết quả tìm kiếm tuyến tính cho điểm ${targetScore}:`, lineResult !== -1 ? `Tìm thấy tại chỉ số ${lineResult}` : "Không tìm thấy");

let sortedScores = bubbleSort([...scores]);
console.log("Danh sách điểm sinh viên sau khi sắp xếp bằng Bubble Sort:", sortedScores);

let binaryResult = binarySearch(sortedScores, targetScore);
console.log(`Kết quả tìm kiếm nhị phân cho điểm ${targetScore}:`, binaryResult !== -1 ? `Tìm thấy tại chỉ số ${binaryResult}` : "Không tìm thấy");

let quickSortedScores = quickSort([...scores]);
console.log("Danh sách điểm sinh viên sau khi sắp xếp bằng Quick Sort:", quickSortedScores);    