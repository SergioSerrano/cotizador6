//Eventos

var index = 0;
$(document).ready(function (e) {
	document.addEventListener("deviceready", function () {




		var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
		var f = new Date();
		$('#descripcion').val(f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());
		//---------------datos 

		window.location.href = '#form1';

		$('#datos').tap(function () {
			var cla = $('#clave').val();
			obtener_clave(cla);
		});


		$('#prospectos').tap(function () {
			$('#Comprador').prop('disabled', false);
			$('#agente').prop('disabled', false);
			$('#No_cliente').prop('disabled', true);
			$('#poblacion').prop('disabled', false);
			$('#condic').prop('disabled', false);
			$('#razon').prop('disabled', false);
			$('#estado').prop('disabled', false);
			$('#tel').prop('disabled', false);
			$('#calle').prop('disabled', false);
			$('#cp').prop('disabled', false);
			$('#fax').prop('disabled', false);
			$('#colonia').prop('disabled', false);
			$('#status').prop('disabled', false);
			$('#mail').prop('disabled', false);

		});

		$("#search-2").live("change", function (event, ui) {

			var $input = $(this);
			var $ul = $("#autocomplete"),

				html = "";

			value = $input.val();





			$ul.html("");

			if (value && value.length > 2) {

				$ul.html("<li><div class='ui-loader'><span class='ui-icon ui-icon-loading'></span></div></li>");
				$ul.listview("refresh");

				var obj = "";
				var msg = "";
				ajax = nuevoAjax();

				ajax.open("POST", "http://testapp2.260mb.net/sincronizar/b_clientes.php", true);
				ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
				ajax.send("buscado=" + value);
				ajax.onreadystatechange = function () {
					if (ajax.readyState == 4) {

						msg = ajax.responseText;

						obj = $.parseJSON(msg);
						var size = obj.length;
						for (i = 0; i < size; i++) {
							/*$('<input  class="cnt123" type="text" name="textinput" id="cnt" value="" />').appendTo('#posicion' + index + '2');*/
							/*html +=*/
							var $li = '<li  value="' + obj[i].cliente + '" id="get_cli' + i + '"></li>';

							$ul.append($li);

							//<a id='clsss' href=#cotizacion>" + obj[i].nombre + "</a>
							$("<a  data-theme='b' href='#'' data-transition='none' id='info_com2' >" + obj[i].cliente + "---" + obj[i].nombre + "</a>").appendTo("#get_cli" + i);
						}
						//$.each( objs, function ( i, val ) {
						//	html += "<li value='"+val.cliente+"'>" + val.nombre + "</li>";
						//});
						//$ul.html(html);
						$ul.listview("refresh");


					}

				}






			}

		});







		$('#add_line').tap(function () {
			var tabla = $('#Claves');
			var $linea = $('<tr></tr>');
			
			$linea.append($('<td></td>').attr({
				id: 'posicion' + index + 'ext'
			}).html('').css({
				background: '#ebebeb'
			}).addClass("ext"));
			
			$linea.append($('<td></td>').attr({
				id: 'posicion' + index + '1'
			}).html('').css({
				background: '#ebebeb'
			}).addClass("clave"));
			$linea.append($('<td></td>')
				.attr({
				id: 'posicionC' + index + '12'
			})
				.html('')
				.css({
				background: '#ebebeb'
			})
				.addClass("claveTD"));
			$linea.append($('<td></td>')
				.attr({
				id: 'posicion' + index + '2'
			})
				.html('')
				.addClass("cnt"));
			$linea.append($('<td> </td>')
				.attr({
				id: 'posicion' + index + '3'
			}) // añadimos un atributo id
			.html('') // el valor de la celda    
			.css({
				background: '#ebebeb'
			})
				.addClass("descripcion"));
			$linea.append($('<td> </td>')
				.attr({
				id: 'posicion' + index + '4'
			}) // añadimos un atributo id
			.html('') // el valor de la celda
			.addClass("p_unit"));
			$linea.append($('<td> </td>')
				.attr({
				id: 'posicion' + index + '5'
			}) // añadimos un atributo id
			.html('') // el valor de la celda    
			.css({
				background: '#ebebeb'
			})
				.addClass("col_total"));
			$linea.append($('<td> </td>')
				.attr({
				id: 'posicion' + index + '6'
			}) // añadimos un atributo id
			.html('') // el valor de la celda    
			.addClass("gen"));
			tabla.append($linea);
			$('<input  class="clave123" type="text" name="textinput" id="clv" value="" />').appendTo('#posicion' + index + '1');
			$('<input  class="cnt123" style="width:35px" type="text" name="textinput" id="cnt" value="" style= />').appendTo('#posicion' + index + '2');
			$('<a  data-theme="b" href="#" data-transition="none" id="info_com" >X</a>').appendTo('#posicionC' + index + '12');
		
			$('<a  data-theme="b" href="#" data-transition="none" id="barcode" >Codigo de Barras</a>').appendTo('#posicion' + index + '1');
			index++;
			return false;
		});
		$('#cancela').tap(function () {
			window.location.reload();
		});
		//---------------guarda encuesta
		$('#guarda').tap(function () {

			exporta();


		});

		var info = {
			precio: 0,
			descripcion: 1
		};


		$('.clave123').live('change', function () {


			clave = $(this).val();
			var objc = $(this);

			obtener_info_clave(clave, objc);





		});

		$('.cliente123').live('change', function () {


			var cliente = $(this).val();


			obtener_info_cliente(cliente);




		});




		var TEMP_2 = 0;
		var TEMP_3 = 0;

		$('.cnt123').live('change', function () {


			var punit = $(this).parents('tr').children('.p_unit').children('#labo').html();


			var ccont = $(this).val();
			TEMP_2 = (isNaN(parseFloat(punit))) ? 0 : parseFloat(punit);

			TEMP_3 = (isNaN(parseFloat(ccont))) ? 0 : parseFloat(ccont);
			var suma = TEMP_2 * TEMP_3;

			$(this).parents('tr').children('.col_total').children('#lacT').remove();
			$('<label style="visibility:hidden"  data-theme="b" id="lacT">' + suma + '</label>').appendTo($(this).parents('tr').children('.col_total'));

			$(this).parents('tr').children('.col_total').children('#lac').remove();
			$('<label style="text-align:right"  data-theme="b" id="lac" class="cl_stotal">$' + suma.format() + '</label>').appendTo($(this).parents('tr').children('.col_total'));


			var summ = 0;
			var TEMP_ = 0;
			var desc = 0;
			var flete = 0;
			var iva = 0;
			var Mtotal = 0;
			var sub_total = 0;
			$.each($('.col_total'), function (index, value) {
				TEMP_ = (isNaN(parseFloat($(this).children('#lacT').html()))) ? 0 : parseFloat($(this).children('#lacT').html());
				summ = summ + TEMP_;
			});
			$('.t_total').children('#ttB').remove();
			$('<label style="visibility:hidden"  data-theme="b" id="ttB">' + summ + '</label>').appendTo($('.t_total'));
			$('.t_total').children('#tt').remove();
			$('<label style="text-align:right"  data-theme="b" id="tt">$' + summ.format() + '</label>').appendTo($('.t_total'));

			desc = summ * ((100 - $('#c_percent').val()) / 100);


			$('.desc_total').children('#t_descuento').remove();
			$('<label style="text-align:right"  data-theme="b" id="t_descuento">$' + desc.format() + '</label>').appendTo($('.desc_total'));

			flete = $("feteinv").html();

			var check_cat = $("#checkbox1_0").is(":checked");
			if (check_cat) {
				flete = 83.0;
			} else {
				flete = 0;

			}
			sub_total = desc + flete;
			$("#st_m1").html('$' + sub_total.format());
			iva = sub_total * 0.16;

			$("#iva1").html('$' + iva.format());

			Mtotal = iva + sub_total;

			$("#mt1").html('$' + Mtotal.format());




		});


		$('#checkbox1_0').live('change', function () {
			var valflete = 0;
			var check_cat = $("#checkbox1_0").is(":checked");
			if (check_cat) {
				valflete = 83.0;
			} else {
				valflete = 0;

			}
			$(this).parents('tr').children('.flete0').children('#fleteinv').remove();
			$('<label style="visibility:hidden" data-theme="b" id="fleteinv">' + valflete + '</label>').appendTo($(this).parents('tr').children('.flete0'));

			$(this).parents('tr').children('.flete0').children('#flete1').remove();
			$('<label style="text-align:right" data-theme="b" id="flete1">$' + valflete.format() + '</label>').appendTo($(this).parents('tr').children('.flete0'));
			$('.cnt123').change();


		});

		$('#c_percent').live('change', function () {
			$('.cnt123').change();



		});

		$('#info_com').live('click', function () {
			$(this).parents('TR').remove();
			$('.cnt123').change();
			return false;
		});


		$('#barcode').live('click', function () {
			
			var $labels=$(this).parents('tr').children('.clave').children('.clave123');
			cordova.plugins.barcodeScanner.scan(function (result) {
				$labels.val(result.text);
				$('.clave123').change();
				//alert("We got a barcode   "+"Result: " + result.text + "  " +"Format: " + result.format + "  " +"Cancelled: " + result.cancelled);
				return false;
			}, function (error) {
				alert("Scanning failed: " + error);
				return false;
			});
		//	
			//$('.clave123').change();
			//return false;
		});


		$('#info_com2').live('click', function () {
			var idC = 'char';
			var idC = $(this).parents('li').attr('value').toString();
			var lar = idC.length;
			if (idC.length < 9)

				for (i = 1; i <= (9 - lar); i++) {
					idC = '0' + idC;
			}

			$('.cliente123').attr('value', idC.toString());
			obtener_info_cliente(idC.toString());
			window.location.href = '#cotizacion';
			return false;
		});
	});
});