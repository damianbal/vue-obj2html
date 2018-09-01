<template>
    <div class="custom_container">
        <!--
        <div class="custom_row">
            <div class="custom_col">
                {{ obj.constructor.name }}
            </div>
        </div>
        -->
        <div class="custom_row" v-for="(p,idx) in properties" :key="idx">
                <div class="custom_col">
                    #{{ p.index }} {{ p.name }}
                </div>

                <div class="custom_col">
                    {{ p.value }}
                </div>
         </div>
    </div>
</template>

<script>
export default {
    props: {
        obj: {
            type: Object,
            default: function() {
                return {}
            }
        }
    },
    mounted() {
        this.properties = []
        Object.keys(this.obj).forEach((o, i) => {

            if(this.obj[o] instanceof Array) {
                let v = this.obj[o].join(', ')

                let op = {
                    index: i,
                    name: o, 
                    value: v
                }
                this.properties.push(op)
            }
            else {
                let op = {
                    index: i,
                    name: o,
                    value: this.obj[o]
                }
                this.properties.push(op)

            }
        })
    },
    data: () => {
        return {
            properties: []
        }
    }
}
</script>

<style>
.custom_container {
    padding: 4px;
    background: rgba(0,0,0,0.05);
    border-radius: 4px;
    border:1px solid rgba(0,0,0,0.1);
    color: rgba(255,255,255,0.5);
}
.custom_row {
    display :flex;
    border-bottom: 1px solid rgba(255,255,255,0.05);
}
.custom_row:last-child {
        border-bottom: none;

}
.custom_col {
    width: 50%;
}
</style>
