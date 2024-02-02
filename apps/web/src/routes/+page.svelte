<script lang="ts">
    import {
        Button, TextBlock, Checkbox, ToggleSwitch, RadioButton, ProgressRing, ProgressBar,
        InfoBadge,
        InfoBar,
        IconButton,
        MenuBar,
        NavigationView, PersonPicture
    } from '@repo/ui';

    let flavor = "chocolate";
    let checked = false;

</script>

<h1>Sample</h1>

<Button>Click me!</Button>

<Checkbox bind:checked/>

<TextBlock/>

<ToggleSwitch bind:checked/>

<RadioButton bind:group={flavor} value="chocolate">Chocolate</RadioButton>
<RadioButton bind:group={flavor} value="vanilla">Vanilla</RadioButton>
<RadioButton bind:group={flavor} value="strawberry">Strawberry</RadioButton>

<ProgressRing/>
<ProgressRing value={50}/>

<ProgressBar/>

<!--<ComboBox items={[-->
<!--		{ name: "Item 0", value: 0 },-->
<!--		{ name: "Item 1", value: 1 },-->
<!--		{ name: "Item 2", value: 2 },-->
<!--	]}/>-->

<div style={{width:"40px"}}>
    <InfoBadge/>
    <InfoBadge severity="success"/>
    <InfoBadge>0</InfoBadge>
</div>

<InfoBar title="Title" message="Message">
    <Button slot="action">Action</Button>
</InfoBar>

<!--<TextBox placeholder="Enter your name." />-->

<IconButton>
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 14A6 6 0 108 2a6 6 0 000 12zm0-1A5 5 0 118 3a5 5 0 010 10z"/>
    </svg>
</IconButton>


<MenuBar/>

<NavigationView/>

<PersonPicture/>

