<script>
    import Select from '$lib/Select.svelte';

    let items = [K
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two' },
        { value: 'three', label: 'Three' },
    ];

    function handle(e) {
        console.log(e.detail);
    }
    function handlePrventDefault(e) {
        e.preventDefault()
        console.log(e.detail);
    }
</script>

<Select {items} on:keydown={handle} /><br>
<Select {items} on:keydown={handlePrventDefault} />

