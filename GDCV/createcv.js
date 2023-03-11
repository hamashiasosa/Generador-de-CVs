function CreateCv() {

    const valuename = inputname.value;
    const valueAddress = inputAddress.value;
    const valueEmail = inputEmail.value;
    const valueTel = inputTel.value;
    const valueUrl = inputUrl.value;
    const valueSummarize = inputSummarize.value;
    



    if (validate()) {
        if (document.getElementById("elprincipal")) {
            document.body.removeChild(document.getElementById("elprincipal"))
        }
        const divmain = document.createElement("div");
        divmain.setAttribute("class", "container");
        divmain.id = "elprincipal"

        const divsec = document.createElement("div");
        divsec.setAttribute("class", "py-5 text-center");
        divmain.appendChild(divsec);


        const h2c = document.createElement("h2");
        h2c.setAttribute("class", "tex-dark");
        h2c.innerText = "Curriculum"
        divsec.appendChild(h2c);

        const p = document.createElement("p");
        p.setAttribute("class", "lead");
        p.innerText = `Sobre mi: ${valueSummarize}`;
        divsec.appendChild(p);

        document.body.appendChild(divmain);


        const divthr = document.createElement("div");
        divthr.setAttribute("class", "col-md-7 col-lg-8");



        const h4D = document.createElement("h4");
        h4D.setAttribute("class", "mb-3");
        divthr.appendChild(h4D);


        const ul1 = document.createElement("ul");
        ul1.setAttribute("class", "list-group list-group-flush");
        divthr.appendChild(ul1);



        const liname = document.createElement("li");
        liname.setAttribute("class", "list-group-item");
        liname.innerText = `Nombre Completo: ${valuename}`;
        ul1.appendChild(liname);


        const liaddress = document.createElement("li");
        liaddress.setAttribute("class", "list-group-item");
        liaddress.innerText = `Direccion: ${valueAddress}`;
        ul1.appendChild(liaddress);




        const liemail = document.createElement("li");
        liemail.setAttribute("class", "list-group-item");
        liemail.innerText = `Email: ${valueEmail}`;
        ul1.appendChild(liemail);



        const litel = document.createElement("li");
        litel.setAttribute("class", "list-group-item");
        litel.innerText = `Telefono De contacto: ${valueTel}`;
        ul1.appendChild(litel);



        const lipag = document.createElement("li");
        lipag.setAttribute("class", "list-group-item");
        lipag.innerText = `Pagina Web: ${valueUrl}`;
        ul1.appendChild(lipag);

        document.body.appendChild(divthr);


        //-------------------------------------------------- Idiomas
        const div1 = document.createElement("div");
        div1.setAttribute("class", "me-2");

        const h4I = document.createElement("h4");
        h4I.setAttribute("class", "offset-1");
        h4I.setAttribute("style","padding-top:30px");
        h4I.innerText = `Idiomas`;
        div1.appendChild(h4I);

        const ul2 = document.createElement("ul");
        ul2.setAttribute("class", "list-group list-group-flush");
        div1.appendChild(ul2);


        const lilang2 = division(document.getElementById("lang"));

        for (let index = 0; index < lilang2.length; index++) {

            const lilang = document.createElement("li");
            lilang.setAttribute("class", "list-group-item");
            lilang.innerText = `${lilang2[index]}`;
            ul2.appendChild(lilang);
        }

        document.body.appendChild(div1);


        //--------------------------------------------------------------------exp
        const div3 = document.createElement("div");
        div3.setAttribute("class", "me-2");

        const h4E = document.createElement("h4");
        h4E.setAttribute("class", "offset-1");
        h4E.setAttribute("style","padding-top:30px");
        h4E.innerText = `Empleos`;
        div3.appendChild(h4E);

        const ul4 = document.createElement("ul");
        ul4.setAttribute("class", "list-group list-group-flush");
        div3.appendChild(ul4);


        const liexp = document.createElement("li");
        liexp.setAttribute("class", "list-group-item");
        ul4.appendChild(liexp);


        const liexp2 = division(document.getElementById("exp"));

        for (let index = 0; index < liexp2.length; index++) {

            const liempleos = document.createElement("li");
            liempleos.setAttribute("class", "list-group-item");
            liempleos.innerText = `${liexp2[index]}`;
            ul4.appendChild(liempleos);
        }


        document.body.appendChild(div3);


        //------------------------------------------------skills
        const div2 = document.createElement("div");
        div2.setAttribute("class", "me-2");

        const h4S = document.createElement("h4");
        h4S.setAttribute("class", "offset-1");
        h4S.setAttribute("style","padding-top:30px");
        h4S.innerText = `Skills`;
        div2.appendChild(h4S);

        const ul3 = document.createElement("ul");
        ul3.setAttribute("class", "list-group list-group-flush");
        div2.appendChild(ul3);

        const lisk = document.createElement("li");
        lisk.setAttribute("class", "list-group-item");
        ul3.appendChild(lisk);


        const lisk2 = division(document.getElementById("skill"));

        for (let index = 0; index < lisk2.length; index++) {

            const liskill = document.createElement("li");
            liskill.setAttribute("class", "list-group-item");
            liskill.innerText = `${lisk2[index]}`;
            ul3.appendChild(liskill);
        }


        document.body.appendChild(div2);

        //-----------------------------------------------Education
        const divT = document.createElement("div");
        divT.setAttribute("class", "me-2");

        const h4T = document.createElement("h4");
        h4T.setAttribute("class", "offset-1");
        h4T.setAttribute("style","padding-top:30px");
        h4T.innerText = `Skills`;
        divT.appendChild(h4T);

        const ulT = document.createElement("ul");
        ulT.setAttribute("class", "list-group list-group-flush");
        divT.appendChild(ulT);


        const list = document.createElement("li");
        list.setAttribute("class", "list-group-item");
        ulT.appendChild(list);


        const list2 = division(document.getElementById("edu"));

        for (let index = 0; index < list2.length; index++) {

            const liedu = document.createElement("li");
            liedu.setAttribute("class", "list-group-item");
            liedu.innerText = `${list2[index]}`;
            ulT.appendChild(liedu);
        }

        document.body.appendChild(divT);




        //--------------------------------------------certifications
        const div4 = document.createElement("div");
        div4.setAttribute("class", "me-2");

        const h4C = document.createElement("h4");
        h4C.setAttribute("class", "offset-1");
        h4C.setAttribute("style","padding-top:30px");
        h4C.innerText = `Certificaciones`;
        div4.appendChild(h4C);

        const ul5 = document.createElement("ul");
        ul5.setAttribute("class", "list-group list-group-flush");
        div4.appendChild(ul5);

        const liC = document.createElement("li");
        liC.setAttribute("class", "list-group-item");
        ul5.appendChild(liC);

        const listCert = division(document.getElementById("cert"));

        for (let index = 0; index < listCert.length; index++) {

            const licerti = document.createElement("li");
            licerti.setAttribute("class", "list-group-item");
            licerti.innerText = `${listCert[index]}`;
            ul5.appendChild(licerti);
        }

        document.body.appendChild(div4); 
    } else {
        alert("Favor llenar todos los campos");
    }


}

//intento de split
function division(element) {
    var lang = element.value
    var lenguaje = lang.split(",");
    return lenguaje
}