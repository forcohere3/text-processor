import {
	DecoupledEditor,
	AccessibilityHelp,
	Alignment,
	Autoformat,
	AutoImage,
	AutoLink,
	Autosave,
	BlockQuote,
	BlockToolbar,
	Bold,
	Code,
	// CodeBlock,
	Essentials,
	FindAndReplace,
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
	GeneralHtmlSupport,
	// Heading,
	Highlight,
	HorizontalLine,
	// HtmlComment,
	// HtmlEmbed,
	ImageBlock,
	ImageCaption,
	ImageInline,
	ImageInsert,
	ImageInsertViaUrl,
	ImageResize,
	ImageStyle,
	ImageTextAlternative,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	Italic,
	Link,
	LinkImage,
	List,
	ListProperties,
	Markdown,
	MediaEmbed,
	Mention,
	Minimap,
	PageBreak,
	Paragraph,
	PasteFromMarkdownExperimental,
	PasteFromOffice,
	RemoveFormat,
	SelectAll,
	// ShowBlocks,
	SimpleUploadAdapter,
	SpecialCharacters,
	SpecialCharactersArrows,
	SpecialCharactersCurrency,
	SpecialCharactersEssentials,
	SpecialCharactersLatin,
	SpecialCharactersMathematical,
	SpecialCharactersText,
	Strikethrough,
	// Style,
	Subscript,
	Superscript,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar,
	TextPartLanguage,
	TextTransformation,
	// Title,
	TodoList,
	Underline,
	Undo
} from 'ckeditor5';

const editorConfig = {
	toolbar: {
		items: [
			'undo',
			'redo',
			'|',
			// 'showBlocks',
			'|',
			// 'heading',
			// 'style',
			'|',
			'fontSize',
			'fontFamily',
			'fontColor',
			'fontBackgroundColor',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'subscript',
			'superscript',
			'|',
			'link',
			'insertImage',
			'insertTable',
			'highlight',
			'blockQuote',
			// 'codeBlock',
			'|',
			'alignment',
			'|',
			'bulletedList',
			'numberedList',
			'todoList',
			'outdent',
			'indent'
		],
		shouldNotGroupWhenFull: false
	},
	plugins: [
		AccessibilityHelp,
		Alignment,
		Autoformat,
		AutoImage,
		AutoLink,
		Autosave,
		BlockQuote,
		BlockToolbar,
		Bold,
		Code,
		// CodeBlock,
		Essentials,
		FindAndReplace,
		FontBackgroundColor,
		FontColor,
		FontFamily,
		FontSize,
		GeneralHtmlSupport,
		// Heading,
		Highlight,
		HorizontalLine,
		// HtmlComment,
		// HtmlEmbed,
		ImageBlock,
		ImageCaption,
		ImageInline,
		ImageInsert,
		ImageInsertViaUrl,
		ImageResize,
		ImageStyle,
		ImageTextAlternative,
		ImageToolbar,
		ImageUpload,
		Indent,
		IndentBlock,
		Italic,
		Link,
		LinkImage,
		List,
		ListProperties,
		Markdown,
		MediaEmbed,
		Mention,
		Minimap,
		PageBreak,
		Paragraph,
		PasteFromMarkdownExperimental,
		PasteFromOffice,
		RemoveFormat,
		SelectAll,
		// ShowBlocks,
		SimpleUploadAdapter,
		SpecialCharacters,
		SpecialCharactersArrows,
		SpecialCharactersCurrency,
		SpecialCharactersEssentials,
		SpecialCharactersLatin,
		SpecialCharactersMathematical,
		SpecialCharactersText,
		Strikethrough,
		// Style,
		Subscript,
		Superscript,
		Table,
		TableCaption,
		TableCellProperties,
		TableColumnResize,
		TableProperties,
		TableToolbar,
		TextPartLanguage,
		TextTransformation,
		// Title,
		TodoList,
		Underline,
		Undo
	],
	blockToolbar: [
		'fontSize',
		'fontColor',
		'fontBackgroundColor',
		'|',
		'bold',
		'italic',
		'|',
		'link',
		'insertImage',
		'insertTable',
		'|',
		'bulletedList',
		'numberedList',
		'outdent',
		'indent'
	],
	fontFamily: {
		supportAllValues: true
	},
	fontSize: {
		options: [10, 12, 14, 'default', 18, 20, 22],
		supportAllValues: true
	},
	heading: {
		options: [
			{
				model: 'paragraph',
				title: 'Paragraph',
				class: 'ck-heading_paragraph'
			},
			{
				model: 'heading1',
				view: 'h1',
				title: 'Heading 1',
				class: 'ck-heading_heading1'
			},
			{
				model: 'heading2',
				view: 'h2',
				title: 'Heading 2',
				class: 'ck-heading_heading2'
			},
			{
				model: 'heading3',
				view: 'h3',
				title: 'Heading 3',
				class: 'ck-heading_heading3'
			},
			{
				model: 'heading4',
				view: 'h4',
				title: 'Heading 4',
				class: 'ck-heading_heading4'
			},
			{
				model: 'heading5',
				view: 'h5',
				title: 'Heading 5',
				class: 'ck-heading_heading5'
			},
			{
				model: 'heading6',
				view: 'h6',
				title: 'Heading 6',
				class: 'ck-heading_heading6'
			}
		]
	},
	htmlSupport: {
		allow: [
			{
				name: /^.*$/,
				styles: true,
				attributes: true,
				classes: true
			}
		]
	},
	image: {
		toolbar: [
			'toggleImageCaption',
			'imageTextAlternative',
			'|',
			'imageStyle:inline',
			'imageStyle:wrapText',
			'imageStyle:breakText',
			'|',
			'resizeImage'
		]
	},
	initialData:
		'<table><thead><tr><th>Sr.</th><th>V.T</th><th>Granth</th><th>ShastraPath</th><th>Pub. Rem</th><th>In. Rem</th></tr></thead><tbody><tr><td>1</td><td>स्व.</td><td></td><td></td><td></td><td></td></tr></tbody></table>',
	link: {
		addTargetToExternalLinks: true,
		defaultProtocol: 'https://',
		decorators: {
			toggleDownloadable: {
				mode: 'manual',
				label: 'Downloadable',
				attributes: {
					download: 'file'
				}
			}
		}
	},
	list: {
		properties: {
			styles: true,
			startIndex: true,
			reversed: true
		}
	},
	mention: {
		feeds: [
			{
				marker: '@',
				feed: [
					/* See: https://ckeditor.com/docs/ckeditor5/latest/features/mentions.html */
				]
			}
		]
	},
	menuBar: {
		isVisible: true
	},
	minimap: {
		container: document.querySelector('#editor-minimap'),
		extraClasses: 'editor-container_include-minimap ck-minimap__iframe-content'
	},
	placeholder: 'Type or paste your content here!',
	style: {
		definitions: [
			{
				name: 'Article category',
				element: 'h3',
				classes: ['category']
			},
			{
				name: 'Title',
				element: 'h2',
				classes: ['document-title']
			},
			{
				name: 'Subtitle',
				element: 'h3',
				classes: ['document-subtitle']
			},
			{
				name: 'Info box',
				element: 'p',
				classes: ['info-box']
			},
			{
				name: 'Side quote',
				element: 'blockquote',
				classes: ['side-quote']
			},
			{
				name: 'Marker',
				element: 'span',
				classes: ['marker']
			},
			{
				name: 'Spoiler',
				element: 'span',
				classes: ['spoiler']
			},
			{
				name: 'Code (dark)',
				element: 'pre',
				classes: ['fancy-code', 'fancy-code-dark']
			},
			{
				name: 'Code (bright)',
				element: 'pre',
				classes: ['fancy-code', 'fancy-code-bright']
			}
		]
	},
	table: {
		contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
	}
};

let activeTable = null; // Track the active table
let activeColumn = null; // Track the active column
let activeHeaderObserver = null; // Track the observer for active header changes

// Initialize the CKEditor with configuration and set up event handlers
DecoupledEditor.create(document.querySelector('#editor'), editorConfig).then(editor => {
    // Store the created editor instance in a global variable
    window.editorInstance = editor;

    // Load saved content from local storage if available
    const savedContent = localStorage.getItem('editorContent');
    if (savedContent) {
        editor.setData(savedContent);
    }

    // Save the content to local storage on editor changes
    editor.model.document.on('change:data', () => {
        localStorage.setItem('editorContent', editor.getData());
    });

    // Append toolbar and menu bar to the document
    document.querySelector('#editor-toolbar').appendChild(editor.ui.view.toolbar.element);
    document.querySelector('#editor-menu-bar').appendChild(editor.ui.view.menuBarView.element);

    const searchInput = document.getElementById('table-search');
    const searchTag = document.createElement('span');
    searchTag.classList.add('search-tag');
    searchInput.parentNode.insertBefore(searchTag, searchInput.nextSibling); // Insert after the input

    // Initially hide search-related elements
    searchTag.style.display = 'none';
    searchInput.style.display = 'none';

    // Handle clicks on table headers
    document.addEventListener('click', event => {
        const target = event.target.closest('th');
        const table = target?.closest('table'); // Find the closest table for the clicked header

        if (target && table) {
            activeTable = table; // Set the active table
            activeColumn = target.cellIndex; // Get column index

            // Stop observing any previously active header
            if (activeHeaderObserver) {
                activeHeaderObserver.disconnect();
            }

            // Set up a MutationObserver to watch for changes in the header text
            activeHeaderObserver = new MutationObserver(() => {
                searchTag.innerHTML = `${target.textContent.trim()} <span class="clear-tag">x</span>`;
            });
            activeHeaderObserver.observe(target, { characterData: true, subtree: true, childList: true });

            // Initialize search tag content
            searchTag.innerHTML = `${target.textContent.trim()} <span class="clear-tag">x</span>`; 
            searchInput.placeholder = 'Filter Column...'; 
            searchInput.value = ''; 
            filterTable(); 
            searchTag.style.display = 'inline'; 
            searchInput.style.display = 'inline'; 
        }
    });

    // Handle clearing the active column and reloading editor content
    searchTag.addEventListener('click', event => {
        if (event.target.classList.contains('clear-tag')) {
            activeTable = null;
            activeColumn = null;
            searchTag.style.display = 'none'; 
            searchInput.style.display = 'none'; 
            searchInput.value = ''; 
            filterTable(); 
            
            // Disconnect the observer when clearing the tag
            if (activeHeaderObserver) {
                activeHeaderObserver.disconnect();
                activeHeaderObserver = null;
            }

            // Reload editor content from local storage
            const savedContent = localStorage.getItem('editorContent');
            if (savedContent) {
                window.editorInstance.setData(savedContent);
            }
        }
    });

    // Filter function for search
    searchInput.addEventListener('input', filterTable);

	function cleanEditor() {
        document.querySelectorAll('#editor .ck-table-column-resizer').forEach(resizer => resizer.remove());
        document.querySelectorAll('#editor br[data-cke-filler="true"]').forEach(filler => filler.remove());
    }

    function filterTable() {
		cleanEditor();
        const searchTerm = searchInput.value.toLowerCase();
        if (!activeTable || activeColumn === null) {
            searchTag.style.display = 'none';
            searchInput.style.display = 'none';
            return;
        }

        Array.from(activeTable.tBodies[0].rows).forEach(row => {
            const cellText = row.cells[activeColumn]?.textContent.toLowerCase() || '';
            row.style.display = cellText.includes(searchTerm) ? '' : 'none';
        });
    }

	function sortTables() {
		const tables = document.querySelectorAll('#editor table');
		
		// Define the custom ranking order for the 2nd column
		const customOrder = [
			"व्यु.", "व्या", "सा.ल", "ल.", "ल.चि.", "पर्या", "विक.", "स्व.", "परि."
		];		
		
		// Function to get the index based on custom order
		function getCustomOrderIndex(value) {
			const index = customOrder.indexOf(value);
			return index !== -1 ? index : Infinity; // Return Infinity if not in custom order
		}

		tables.forEach((table) => {
			const rows = Array.from(table.querySelectorAll('tbody tr'));

			// Sort rows based on cell content
			rows.sort((a, b) => {
				const cellsA = a.cells;
				const cellsB = b.cells;
				
				// Compare values in the 2nd column based on custom order
				const valueA = cellsA[1].textContent.trim();
				const valueB = cellsB[1].textContent.trim();
				
				const orderIndexA = getCustomOrderIndex(valueA);
				const orderIndexB = getCustomOrderIndex(valueB);
				
				if (orderIndexA !== orderIndexB) {
					return orderIndexA - orderIndexB;
				}

				// Fall back to alphabetical comparison for the remaining columns
				for (let i = 2; i < cellsA.length; i++) {
					const cellValueA = cellsA[i].textContent.trim();
					const cellValueB = cellsB[i].textContent.trim();
					
					if (cellValueA > cellValueB) return 1;
					if (cellValueA < cellValueB) return -1;
				}
				
				return 0;
			});

			// Clear and re-append sorted rows
			const tbody = table.querySelector('tbody');
			rows.forEach(row => tbody.appendChild(row));
		});

		// Cleanup extraneous CKEditor elements
		document.querySelectorAll('#editor .ck-table-column-resizer').forEach(resizer => resizer.remove());
		document.querySelectorAll('#editor br[data-cke-filler="true"]').forEach(filler => filler.remove());

		// Update CKEditor content to reflect the sorted tables
		const updatedContent = document.querySelector('#editor').innerHTML;
		window.editorInstance.setData(updatedContent);

		// Save the updated content to local storage
		localStorage.setItem('editorContent', updatedContent);
	}

	window.sortTables = sortTables;

	
    return editor;
}).catch(error => {
    console.error(error);
});