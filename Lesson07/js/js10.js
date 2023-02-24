// giải phương trình bậc 1 (console)
// html -> input từ text

// log
// 1: a=0; b=0
// 2: a=0; b=123
// 3: a=12; b

const fn_ptb1 = (a,b)=>{
    console.log("Giải phương trình:",a,".x+",b,"=0");
    if(a==0){
        if(b==0){
            console.log("Pt vô số nghiệm");
        }else{
            console.log("Pt vô nghiệm");
        }
    }else{
        console.log("Pt có nghiệm x= ", -b/a);
    }
}

// test
fn_ptb1(0,0);
fn_ptb1(0,10);
fn_ptb1(10,20);

// Bài tập: giải phương trình bậc 2
