function submit()
{
    m1=parseFloat(document.getElementById("ip1").value);
    p2=parseFloat(document.getElementById("ip2").value);
    m3=parseFloat(document.getElementById("ip3").value);
    p4=parseFloat(document.getElementById("ip4").value);
    m5=parseFloat(document.getElementById("ip5").value);
    p6=parseFloat(document.getElementById("ip6").value);
    m7=parseFloat(document.getElementById("ip7").value);
    p8=parseFloat(document.getElementById("ip8").value);
    m9=parseFloat(document.getElementById("ip9").value);
    p10=parseFloat(document.getElementById("ip10").value);
    m11=parseFloat(document.getElementById("ip11").value);
    p12=parseFloat(document.getElementById("ip12").value);
    m13=parseFloat(document.getElementById("ip13").value);
    p14=parseFloat(document.getElementById("ip14").value);
    m15=parseFloat(document.getElementById("ip15").value);
    p16=parseFloat(document.getElementById("ip16").value);
    tot=document.getElementById("tot");
    result=document.getElementById("result");
    grade=document.getElementById("grade");
    percent=document.getElementById("percent");

    if(m1>90 || p2>10 || m3>90 || p4>10 || m5>90 || p6>10 || m7>90 || p8>10 || m9>90 || p10>10 || m11>90 || p12>10 || m13>90 || p14>10 || m15>90 || p16>10)
    {
        alert("Enter a valid mark")
    }
    if(m1.value===" "||p2.value===" "||m3.value===" "||p4.value===" "||m5.value===" "||p6.value===" "||m7.value===" "||p8.value===" "||m9.value===" "||p10.value===" "||m11.value===" "||p12.value===" "||m13.value===" "||p14.value===" "||m15.value===" "||p16.value===" ")
    {
        alert("Please fill all the fields");
    }
    else{
    res1=document.getElementById("res1");
    res1.value=m1+p2;
    
    res2=document.getElementById("res2");
    res2.value=m3+p4;
    
    res3=document.getElementById("res3");
    res3.value=m5+p6;
    
    res4=document.getElementById("res4");
    res4.value=m7+p8;
    
    res5=document.getElementById("res5");
    res5.value=m9+p10;
    
    res6=document.getElementById("res6");
    res6.value=m11+p12;
    
    res7=document.getElementById("res7");
    res7.value=m13+p14;
    
    res8=document.getElementById("res8");
    res8.value=m15+p16;

    total=m1+p2+m3+p4+m5+p6+m7+p8+m9+p10+m11+p12+m13+p14+m15+p16;
    tot.value=total;

    if(total>=400)
    {
        result.value="PASS";
    }
    else if(total<400)
    {
        result.value="FAIL";
    }

    per=(total/800)*100;
    percent.value=per+"%";


    if(per>=90)
    {
        grade.value="O";
    }
    else if(per>=80)
    {
        grade.value="A++";
    } 
    else if(per>=70)
    {
        grade.value="A";
    } 
    else if(per>=60)
    {
        grade.value="B++";
    } 
    else if(per>=50)
    {
        grade.value="B";
    } 
    else
    {
        grade.value="AR";
    }
    }
}