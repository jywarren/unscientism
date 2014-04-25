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
    v = v.replace(/\bexpert\b/g, '"expert"');
	v = v.replace(/\bExpert\b/g, '"Expert"');
    v = v.replace(/\bprofessional\b/g, '"professional"');
	v = v.replace(/\bProfessional\b/g, '"Professional"');
	
	textNode.nodeValue = v;
}


