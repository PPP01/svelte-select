<script>
    import Select from '$lib/Select.svelte';

    let items = [
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two' },
        { value: 'three', label: 'Three' },
    ];

    const handleCssClassesOverwrite = (cssClasses) => {
        console.log(cssClasses);
        cssClasses.base = 'svelte-select myCustomClass';
        return cssClasses;
    };


</script>
<h1>Example as function</h1>
<Select {items} cssClassesOverwrite={handleCssClassesOverwrite} />

