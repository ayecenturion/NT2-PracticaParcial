
export default {
  name: 'src-components-formulario',
  components: {},
  props: [],
  data () {
    return {
      FormData:this.getInicialData(),
      FormState:{},
      nombreClienteLongMin: 3,
      nombreClienteLongMax: 20,
      nroDocClienteMin: 7000000,
      nroDocClienteMax: 96000000,
      montoAPagarMin: 0,
      PagoRealizadoMin: 0
    }
  },
  computed: {
    
  },
  mounted () {

  },
  methods: {
    getInicialData(){
      return{
        nombreCliente: '',
        nroDocCliente:'',
        montoAPagar:'',
        pagoRealizado:''
      }
    },
    enviar(){
      console.log({...this.FormData})
      this.FormData = this.getInicialData()
      this.FormState._reset()
    },
    obtenerFechaYHora(){
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); 
      var yyyy = today.getFullYear();
      var hh = today.getHours();
      var min = today.getMinutes();
      var ss = today.getSeconds();

      today = dd + '/' + mm + '/' + yyyy + ' - ' + hh + ':' + min + ':' + ss;

      return today
    },
    obtenerDeuda(){
      let resultado = this.FormData.montoAPagar - this.FormData.pagoRealizado
      if(this.FormData.pagoRealizado > this.FormData.montoAPagar){
        resultado = resultado * (-1)
      }else if(this.FormData.montoAPagar == this.FormData.pagoRealizado){
        resultado = 0
      }
      return resultado
    },
    getEstilo(){

      if(this.obtenerDeuda() == 0){
        return{
          'background-color': 'green'
        }
      }else if(this.FormData.pagoRealizado > this.FormData.montoAPagar){
        return{
          'background-color': 'blue'
        }
      }else{
        return{
          'background-color': 'red'
        }
      }
    }
  }
}  
