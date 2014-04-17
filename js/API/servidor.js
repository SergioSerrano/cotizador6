var direcccion = "hola";

function nuevoAjax() {
	var xmlhttp = false;
	try {
		// Creacion del objeto AJAX para navegadores no IE
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e) {
		try {
			// Creacion del objet AJAX para IE
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (E) {
			if (!xmlhttp && typeof XMLHttpRequest != "undefined") xmlhttp = new XMLHttpRequest();
		}
	}
	return xmlhttp;

}

function enviarDatos(nom, tel, email) {
	$.ajax({
		type: "POST",
		url: "http://testapp2.260mb.net/sincronizar/enviar.php",
		data: "nom=" + nom + "&tel=" + tel + "&mai=" + email
	}).done(function (msg) {
		if (msg == 1) {
			//subirFoto(foto,nom);
			window.location.href = "#page";
		} else {
			navigator.notification.alert("Error al Registrarse" + msg, null, "Registro", "Aceptar");
		}
	});
}

function setCookie(c_name, value, exdays) {
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
	document.cookie = c_name + "=" + c_value;
}


function getCookie(c_name) {
	var c_value = document.cookie;
	var c_start = c_value.indexOf(" " + c_name + "=");
	if (c_start == -1) {
		c_start = c_value.indexOf(c_name + "=");
	}
	if (c_start == -1) {
		c_value = null;
	} else {
		c_start = c_value.indexOf("=", c_start) + 1;
		var c_end = c_value.indexOf(";", c_start);
		if (c_end == -1) {
			c_end = c_value.length;
		}
		c_value = unescape(c_value.substring(c_start, c_end));
	}

	return c_value;
}

function guarda_calif(valrad1, valrad2, valrad3, valrad4, valrad5, times) {

	$.ajax({
		type: "POST",
		url: "http://testapp2.260mb.net/sincronizar/g_preguntas.php",
		data: "c1=" + valrad1 + "&c2=" + valrad2 + "&c3=" + valrad3 + "&c4=" + valrad4 + "&c5=" + valrad5 + "&times=" + times
	}).done(function (msg) {

		if (msg == 1) {

			//subirFoto(foto,nom);


			navigator.notification.alert("Datos enviados", null, "Conectando al servidor", "Aceptar");
			return msg;

		} else {
			navigator.notification.alert("Error al guardar calificacion", null, "Alert", "Aceptar");
			return msg;
		}
	});
}

function guarda_cliente(val1, val2, val3, val4, val5, val6, val7, val8, val9, val10, val11, val12, val13, val14, val15, val16, val17, times) {
	/*alert( "c1="+val1+"&c2="+val2+"&c3="+val3+"&c4="+val4+"&c5="+val5+"&times="+times);
	$.ajax({
		type: "POST",
		url: "http://testapp2.260mb.net/sincronizar/prospectos.php",
		data: "c1="+val1+"&c2="+val2+"&c3="+val3+"&c4="+val4+"&c5="+val5+"&times="+times
	}).done(function(msg) {
		
		if(msg==1){
			
			//subirFoto(foto,nom);
		
			
			navigator.notification.alert("Datos enviados", null, "Conectando al servidor", "Aceptar");	
			return msg;
			
		}else{
			navigator.notification.alert("Error al guardar calificacion", null, "Alert", "Aceptar");	
			return msg;
		}
	});*/
	ajax = nuevoAjax();
	ajax.open("POST", "http://testapp2.260mb.net/sincronizar/g_clientes.php", true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf8");
	ajax.send("c1=" + val1 + "&c2=" + val2 + "&c3=" + val3 + "&c4=" + val4 + "&c5=" + val5 + "&c6=" + val6 + "&c7=" + val7 + "&c8=" + val8 + "&c9=" + val9 + "&c10=" + val10 + "&c11=" + val11 + "&c12=" + val12 + "&c13=" + val13 + "&c14=" + val14 + "&c15=" + val15 + "&c16=" + val16 + "&c17=" + val17 + "&times=" + times);
	ajax.onreadystatechange = function () {
		if (ajax.readyState == 4) {
			var msg = ajax.responseText
			if (msg == 1) {
				navigator.notification.alert("Datos guardados correctamente", obtener_ultimo_folio(times), "Guardado", "Aceptar");


			}
		}
	}
	return false;
}

function sube_interno(val1, val2, val3, val4, val5, val6, val7, val8, val9, val10, val11, val12, val13, val14, val15, val16, val17) {


	/*	
	$.ajax({
		type: "POST",
		url: "http://testapp2.260mb.net/sincronizar/g_clientes.php",
		data: "c1="+val+"&c2="+val2+"&c3="+val3+"&c4="+val4+"&c5="+val5+"&c6="+val6+"&c7="+val7+"&c8="+val8+"&c9="+val9+"&c10="+val10+"&c11="+val11+"&c12="+val12+"&c13="+val13+"&c14="+val14+"&c15="+val15+"&c16="+val16+"&c17="+val17
	}).done(function(msg) {
		
		if(msg==1){
			
			
			window.location.href="#form1";
			//navigator.notification.alert("Reserva Sincronizada Satisfactoriamente",null,"Reserva Realizada", "Aceptar");
			
			//subirFoto(foto,nom);
		
		
		}else{
			navigator.notification.alert("Error al guardar calificacion", null, "Registro", "Aceptar");	
		}
	});*/

	ajax = nuevoAjax();
	ajax.open("POST", "http://testapp2.260mb.net/sincronizar/g_clientes.php", true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf8");
	ajax.send("c1=" + val1 + "&c2=" + val2 + "&c3=" + val3 + "&c4=" + val4 + "&c5=" + val5 + "&c6=" + val6 + "&c7=" + val7 + "&c8=" + val8 + "&c9=" + val9 + "&c10=" + val10 + "&c11=" + val11 + "&c12=" + val12 + "&c13=" + val13 + "&c14=" + val14 + "&c15=" + val15 + "&c16=" + val16 + "&c17=" + val17);
	ajax.onreadystatechange = function () {
		if (ajax.readyState == 4) {
			var msg = ajax.responseText;
			if (msg == 1) {
				window.location.href = "#form1";
			}
		}
	}
	return false;
}

function subirReserva(id, th, ha, di, pe) {
	$.ajax({
		type: "POST",
		url: "http://testapp2.260mb.net/sincronizar/enviar.php",
		data: "nom=" + th + "&tel=" + ha + "&mai=" + di + "&pe=" + pe
	}).done(function (msg) {
		if (msg == 1) {
			navigator.notification.alert("Reserva Sincronizada Satisfactoriamente", function () {

				guardarHistorial(th, ha, di, pe);
				borrarReserva(id);
			}, "Reserva Realizada", "Aceptar");
		} else {
			navigator.notification.alert("Error al Registrarse", null, "Registro", "Aceptar");
		}
	});
}



function obtener_ultimo_folio(clave) {


	ajax = nuevoAjax();
	ajax.open("POST", "http://testapp2.260mb.net/sincronizar/d_o.php", true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf8");
	ajax.send("clave=" + clave);
	ajax.onreadystatechange = function () {
		if (ajax.readyState == 4) {

			var msg = ajax.responseText
			var obj = $.parseJSON(msg);
			navigator.notification.alert("Su Numero de folio es: " + obj.ultimo_folio, window.location.reload(), "Folio", "Aceptar");


		}

	}
	return false;
}

function obtener_coincidencias(buscado) {


	ajax = nuevoAjax();
	ajax.open("POST", "http://testapp2.260mb.net/sincronizar/b_clientes.php", true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf8");
	ajax.send("buscado=" + buscado);
	ajax.onreadystatechange = function () {
		if (ajax.readyState == 4) {

			var msg = ajax.responseText

			var obj = $.parseJSON(msg);
			return obj;


		}

	}
	return false;
}

function obtener_info_clave(clave, objc) {
	return $.ajax({
		type: "GET",
		url: "http://testapp2.260mb.net/sincronizar/info_clave.php",
		data: "clave=" + clave
	}).done(function (msg) {
		if (msg[0] == 0) {
			//subirFoto(foto,nom);

			navigator.notification.alert("Error al obtener info", "Folio", "Aceptar");

		} else {

			var obj = $.parseJSON(msg);

			(function () {
				llena_tabla(objc, obj);
			}());
			//navigator.notification.alert(obj.precio,llena_tabla(objc,obj), "Folio", "Aceptar");



		}

	});


}


function obtener_info_cliente(cliente) {

	return $.ajax({
		type: "POST",
		url: "http://testapp2.260mb.net/sincronizar/datos_cliente.php",
		data: "cliente=" + cliente
	}).done(function (msg) {
		if (msg[0] == 0) {
			//subirFoto(foto,nom);

			navigator.notification.alert("Error al obtener info", "Folio", "Aceptar");

		} else {

			var obj = $.parseJSON(msg);

			(function () {

				llena_datos_cliente(obj);
			}());
			//navigator.notification.alert(obj.precio,llena_tabla(objc,obj), "Folio", "Aceptar");



		}

	});


}

function llena_datos_cliente(obj) {

	$('#Comprador').val(obj.nombre);
	$('#agente').val(obj.agente);
	$('#poblacion').val(obj.ciudad);
	$('#condic').val(obj.cond_pago);
	$('#razon').val(obj.nombre);
	$('#estado').val(obj.estado);
	$('#tel').val(obj.telefono);
	$('#calle').val(obj.calle);
	$('#cp').val(obj.cp);
	$('#colonia').val(obj.col);
	$('#status').val(obj.status);
	$('#mail').val(obj.mail);

}

function llena_tabla(objc, obj) {



	var valor = (isNaN(parseFloat(obj.precio))) ? 0 : parseFloat(obj.precio);

	valor = valor * 1.67;


	objc.parents('tr').children('.clave').children('#clv').val(obj.clave1);


	objc.parents('tr').children('.ext').children('#extid').remove();
	$('<label style="text-align:right" data-theme="b" id="extid" class="ext_num">' + obj.existencia + '</label>').appendTo(objc.parents('tr').children('.ext'));

	objc.parents('tr').children('.descripcion').children('#las').remove();
	$('<label style="text-align:right" data-theme="b" id="las" class="cldescripcion">' + obj.descripcion + '</label>').appendTo(objc.parents('tr').children('.descripcion'));

	objc.parents('tr').children('.p_unit').children('#labo').remove();
	$('<label  style="visibility:hidden" id="labo" ">' + valor + '</label>').appendTo(objc.parents('tr').children('.p_unit'));

	objc.parents('tr').children('.p_unit').children('#lab').remove();
	$('<label style="text-align:right" data-theme="b" id="lab" class="clprecio">$' + valor.format() + '</label>').appendTo(objc.parents('tr').children('.p_unit'));
}

function exporta() {



	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);








}


function success3(parent) {

}

function success2(parent) {
	parent.getParent(success3, fail);

}





function gotFS(fileSystem) {
	fileSystem.root.getFile($('#No_cliente').val() + "cot.pdf", {
		create: true,
		exclusive: false
	}, gotFileEntry, fail);
}

function gotFileEntry(fileEntry) {

	fileEntry.createWriter(gotFileWriter, fail);
	//	alert(direcccion);
	direcccion = fileEntry.fullPath;
	//alert(direcccion);
	// Obtiene el `DirectoryEntry` padre



}

function success(entries) {
	alert("succes " + error.code);
}

function fail(error) {
	alert("Ocurrió un error mientras se obtenía la lista: " + error.code);
}



function gotFileWriter(writer) {
	var temppdf = 0;
	var sumpdf = 0;
	var valorclave = '';
	var meses1 = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
	var f1 = new Date();
	var doc = new jsPDF();
	var lineas = 10;
	var contador = 0;




	//	var imagen='data:image/jpeg;base64,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';

	//doc.addImage(imagen, 'JPEG', 15, 15,15,15);
	//doc.addImage(imagen, 'jpeg', 25, 25, 10, 10, undefined, 'slow');
	doc.setFontSize(12);
	doc.text(120, lineas, 'VICTORINOX');
	lineas = lineas + 10;
	doc.text(60, lineas, 'COTIZACIÓN');
	doc.text(120, lineas, 'Puebla Pue, a:  ' + f1.getDate() + ' de ' + meses1[f1.getMonth()] + ' de ' + f1.getFullYear());
	lineas = lineas + 10;
	doc.text(5, lineas, 'Comprador');
	doc.text(145, lineas, 'Agente');

	lineas = lineas + 5;
	var comp = $('#Comprador').val();

	doc.text(5, lineas, comp);
	var agente = $('#agente').val();

	doc.text(145, lineas, agente);

	lineas = lineas + 5;
	doc.text(5, lineas, 'Cliente');
	doc.text(85, lineas, 'Poblacion');
	doc.text(145, lineas, 'Condiciones');

	lineas = lineas + 5;
	var no_cliente = $('#No_cliente').val();
	doc.text(5, lineas, no_cliente);
	var poblacion = $('#poblacion').val();
	doc.text(85, lineas, poblacion);
	var condic = $('#condic').val();
	doc.text(145, lineas, condic);

	lineas = lineas + 5;

	doc.text(5, lineas, 'Razon Social');
	doc.text(85, lineas, 'Estado');
	doc.text(145, lineas, 'Telefono');

	lineas = lineas + 5;
	var razon = $('#razon').val();
	doc.text(5, lineas, razon);
	var estado = $('#estado').val();
	doc.text(85, lineas, estado);
	var tel = $('#tel').val();
	doc.text(145, lineas, tel);

	lineas = lineas + 5;
	doc.text(5, lineas, 'Calle');
	doc.text(85, lineas, 'C.P.');
	doc.text(145, lineas, 'Fax');


	lineas = lineas + 5;
	var calle = $('#calle').val();
	doc.text(5, lineas, calle);
	var cp = $('#cp').val();
	doc.text(85, lineas, cp);
	var fax = $('#fax').val();
	doc.text(145, lineas, fax);


	lineas = lineas + 5;
	doc.text(5, lineas, 'Colonia');
	doc.text(85, lineas, 'Status');
	doc.text(145, lineas, 'Mail');

	lineas = lineas + 5;
	var colonia = $('#colonia').val();
	doc.text(5, lineas, colonia);
	var status = $('#status').val();
	doc.text(85, lineas, status);
	var mail = $('#mail').val();
	doc.text(145, lineas, mail);

	lineas = lineas + 20;


	doc.text(5, lineas, 'Por medio de la presente le envio un cordial saludo y a su vez le hago llegar la cotizacion solicitada');


	contador = lineas + 20;

	$.each($('.clave123'), function (index, value) {
		valorclave = $(this).val();
		doc.text(5, contador, valorclave);
		contador = contador + 5;
	});
	contador = lineas + 20;
	$.each($('.cnt123'), function (index, value) {
		valorclave = $(this).val();
		doc.text(45, contador, valorclave);
		contador = contador + 5;
	});
	contador = lineas + 20;
	$.each($('.cldescripcion'), function (index, value) {
		valorclave = $(this).text();
		doc.text(55, contador, valorclave);
		contador = contador + 5;
	});
	contador = lineas + 20;
	$.each($('.clprecio'), function (index, value) {
		valorclave = $(this).text();
		doc.text(165, contador, valorclave);
		contador = contador + 5;
	});

	contador = lineas + 20;
	$.each($('.cl_stotal'), function (index, value) {
		valorclave = $(this).text();
		doc.text(185, contador, valorclave);
		contador = contador + 5;
	});
	lineas = contador;

	lineas = lineas + 5;
	var tt = $('#tt').text();
	doc.text(185, lineas, tt);
	lineas = lineas + 5;

	var t_descuento2 = $('#c_percent').val();
	if (t_descuento2 != '0') {
		doc.text(155, lineas, 'Descuento');


		doc.text(185, lineas, t_descuento2 + '%');
	}

	lineas = lineas + 5;

	var t_descuento = $('#t_descuento').text();


	doc.text(185, lineas, t_descuento);









	lineas = lineas + 5;

	doc.text(155, lineas, 'Flete');
	doc.setFontSize(9);
	doc.text(5, lineas + 5, 'Condiciones');
	doc.text(5, lineas + 10, 'de venta');
	doc.text(5, lineas + 45, 'Comentarios');
	doc.text(5, lineas + 55, 'Tiempo de');
	doc.text(5, lineas + 60, 'entrega');


	doc.text(30, lineas + 5, '100% de deposito');

	doc.text(30, lineas + 15, 'Deposito de efectivo o cheque mismo banco. Si es un cheque de otro banco');

	doc.text(30, lineas + 20, 'se autoriza su');
	doc.text(30, lineas + 25, 'pedido al tercer dia que su cheque se refleje y no sea rebotado por el banco');

	doc.text(30, lineas + 30, 'Ficha de convenio CIE Bancomer Num. 1829-7 Cta. Bancomer Suc. 1803');
	doc.text(30, lineas + 35, 'No. de Cta. 0446573118 Trasferencia electronica 012 650 0044573118 3');

	doc.text(30, lineas + 40, 'BANAMEX 184414-2 Suc. 826 San Felipe o Transferencia 002 65008261844142 7 ');
	doc.text(30, lineas + 45, 'Los precios anteriores No incluyen IVA, estan sujetos a cambio');

	doc.text(30, lineas + 50, 'sin previo aviso y a existencias');
	doc.text(30, lineas + 55, '5 dias habiles');

	doc.setFontSize(12);

	var felte = $('#flete1').text();
	doc.text(185, lineas, felte);





	lineas = lineas + 5;
	doc.text(155, lineas, 'SUB-TOTAL');


	var SB = $('#st_m1').text();
	doc.text(185, lineas, SB);


	lineas = lineas + 5;
	doc.text(155, lineas, 'IVA');



	var IVA = $('#iva1').text();
	doc.text(185, lineas, IVA);

	lineas = lineas + 5;
	doc.text(155, lineas, 'TOTAL');


	var TOTAL = $('#mt1').text();
	doc.text(185, lineas, TOTAL);

	writer.write(doc.output());


	var dire = direcccion;
	//alert(dire);

	//window.plugins.EmailComposer.showEmailComposerWithCallback(callback,subject,body,toRecipients,ccRecipients,bccRecipients,isHtml,attachments);
	window.plugin.email.open({

		to: ['sserrano@victorinox.com.mx'],

		attachments: [dire],
		subject: $('#No_cliente').val() + "cot.pdf",
		body: '<cotizacion de ' + $('#No_cliente').val(),
		isHtml: false
	});
	/*cordova.plugins.fileOpener2.open(
        dire, 
        'application/pdf', 
        { 
            error : function(errorObj) { 
                alert('Error status: ' + errorObj.status + ' - Error message: ' + errorObj.message); 
            },
            success : function () {
                alert('file opened successfully');              
            }
        }
    );*/






}

function callback(error1) {
	alert(error1);


}

function fail(error) {
	alert(error.code);


}