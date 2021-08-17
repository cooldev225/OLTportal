/* pdf-functions.js contains pdf JS  */
/*  Author : CrdioStudio Dev team */

/* custom functions */

jQuery('#lp_profile_pdf').click(function () {
    doc.fromHTML(jQuery('#lp_profile_for_pdf').html(), 15, 15, {
            'width': 170,
            'elementHandlers': specialElementHandlers
        },
        function(bla){doc.save('my-profile.pdf');}
    );
});


jQuery('.lp-pdf-btn a').click(function (e) {
    doc.fromHTML(jQuery('#lp-ad-click-inner').html(), 15, 15, {
            'width': 170,
            'elementHandlers': specialElementHandlers
        },function(bla){doc.save('invoice.pdf');}
    );
    e.preventDefault();
});


jQuery('button.downloadpdffullinv').click(function (e) {
	
	//var source = document.getElementById("lp-ad-click-inner");
	var source = document.getElementById("lpinvoiceforpdf");
	margins = {
	  top: 10,
	  bottom: 10,
	  left: 10,
	  width: 750
	};
	
	doc.fromHTML(source, margins.left, margins.top, {
            'width': margins.width,
            'elementHandlers': specialElementHandlers
        },function(bla){doc.save('finvoice.pdf');}
    );
    e.preventDefault();
});





jQuery('.recipt-download-print i.fa-download').click(function (e) {
    doc.fromHTML(jQuery('.checkout-transaction-receipt').html(), 15, 15, {
            'width': 170,
            'elementHandlers': specialElementHandlers
        },
        function(bla){doc.save('Receipt_001.pdf');}
    );
    e.preventDefault();
});


/* for backend */
jQuery(document).on('click', 'button.lp-download-invoice', function (e) {
	
	var source = document.getElementById("lpinvoiceforpdf");
	margins = {
	  top: 10,
	  bottom: 10,
	  left: 10,
	  width: 750
	};
	
	doc.fromHTML(source, margins.left, margins.top, {
            'width': margins.width,
            'elementHandlers': specialElementHandlers
        },function(bla){doc.save('listing-invoice.pdf');}
    );
    e.preventDefault();
});





/* core function */

var doc = new jsPDF();
var specialElementHandlers = {
    '.lpeditor': function (element, renderer) {
        return true;
    }
};

