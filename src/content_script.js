walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

    v = v.replace(/\bscientist\b/g, '"scientist"');
	v = v.replace(/\bScientist\b/g, '"Scientist"');
    v = v.replace(/\bscientists\b/g, '"scientists"');
	v = v.replace(/\bScientists\b/g, '"Scientists"');
    v = v.replace(/\bexpert\b/g, '"expert"');
	v = v.replace(/\bExpert\b/g, '"Expert"');
    v = v.replace(/\bexperts\b/g, '"experts"');
	v = v.replace(/\bExperts\b/g, '"Experts"');
    v = v.replace(/\bprofessional\b/g, '"professional"');
	v = v.replace(/\bProfessional\b/g, '"Professional"');
    v = v.replace(/\bprofessionals\b/g, '"professionals"');
	v = v.replace(/\bProfessionals\b/g, '"Professionals"');
    v = v.replace(/\bjournalist\b/g, '"journalist"');
	v = v.replace(/\bJournalist\b/g, '"Journalist"');
    v = v.replace(/\bjournalists\b/g, '"journalists"');
	v = v.replace(/\bJournalists\b/g, '"Journalists"');	
	
	textNode.nodeValue = v;
}


