<script>
    import Select from '$lib/Select.svelte';

    const generateItems = () => {
        // Predefined list of random words. You can expand or modify this list as needed.
        const randomWords = [
            'Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf',
            'Hotel', 'India', 'Juliet', 'Kilo', 'Lima', 'Mike', 'November',
            'Oscar', 'Papa', 'Quebec', 'Romeo', 'Sierra', 'Tango', 'Uniform',
            'Victor', 'Whiskey', 'X-ray', 'Yankee', 'Zulu', 'Nimbus', 'Orion',
            'Phoenix', 'Quasar', 'Zenith', 'Lyric', 'Mystic', 'Nebula', 'Nova',
            'Solstice', 'Terra', 'Vortex', 'Aurora', 'Cascade', 'Dynamo',
            'Eclipse', 'Falcon', 'Glacier', 'Horizon', 'Ignite', 'Jupiter',
            'Kraken', 'Luminary', 'Mirage', 'Nimbus', 'Odyssey', 'Pinnacle',
            'Quantum', 'Radiant', 'Specter', 'Tempest', 'Umbra', 'Vertex',
            'Wavelength', 'Xenon', 'Yield', 'Zenith', 'Arcane', 'Blaze',
            'Celestial', 'Drift', 'Ember', 'Frost', 'Galaxy', 'Halo', 'Inferno',
            'Jade', 'Keystone', 'Legacy', 'Monarch', 'Nimbus', 'Opal',
            'Pulse', 'Quest', 'Reverie', 'Stellar', 'Tranquil', 'Unity',
            'Voyage', 'Whisper', 'Xylem', 'Yield', 'Zephyr'
        ];

        const items = [];

        // Function to get a random word from the randomWords array
        const getRandomWord = () => {
            const index = Math.floor(Math.random() * randomWords.length);
            return randomWords[index];
        };

        // Populate the items array with 100 objects
        for (let i = 1; i <= 100; i++) {
            items.push({
                value: i,
                label: getRandomWord()
            });
        }

        return items;
    };

    // Generate the items array
    const items = generateItems();


</script>

<form>
    <input type="text">
    <Select {items} stepsPageup="20" stepsPagedown="20" multiple />
    <Select {items} stepsPageup="20" stepsPagedown="20" closeListOnTab={true} multiple />
    <input type="text">
</form>
