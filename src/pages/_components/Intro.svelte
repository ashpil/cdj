<script>
    import Nav from './Nav.svelte';
</script>

<style lang='scss'>
    #intro {
        display: grid;
        grid-template-columns: 1fr fit-content(60rem) 1fr;
        h3, #intro-top {
            grid-column: 2;
        }
        #intro-top {
            display: flex;
            justify-content: space-between;
        }
    }
</style>

<div id="intro">
    <div id="intro-top">
        <h1>Cornell Data Journal</h1>
        <Nav/>
    </div>
    <h3>a digital magazine offering data-driven perspectives on current events, academic, politics, and beyond. </h3>
</div>
