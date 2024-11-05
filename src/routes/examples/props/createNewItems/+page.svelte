<script>
    import Select from '$lib/Select.svelte';

    let items = [
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two' },
        { value: 'three', label: 'Three' },
    ];

    let createItemFromValue = null;

    function getRandomString() {
        const adjectives = ["schnell", "hell", "ruhig", "stark", "klar", "sanft", "froh", "leise"];
        const nouns = ["fluss", "berg", "wald", "himmel", "meer", "stern", "wind", "blume"];

        const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
        const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

        return `${randomAdjective}-${randomNoun}`;
    }

    function handleCreateItemFromValue()
    {
        createItemFromValue = getRandomString();
    }

    function genManyItems()
    {
        createItemFromValue = Array.from({ length: 10 }, () => getRandomString());
    }


</script>

<Select {items} createNewItems={true} />
<br />
<Select {items} createNewItems={true} multiple />
<br />
<Select {items} createNewItems={true} multiple {createItemFromValue} />
<button on:click={handleCreateItemFromValue}>Create new item</button>
<button on:click={genManyItems}>Create many item</button>
<br />
<Select {items} createNewItems={false} multiple />