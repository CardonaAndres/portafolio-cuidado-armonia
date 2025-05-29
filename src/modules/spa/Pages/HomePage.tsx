import { Hero } from "@/modules/spa/components/Hero";
import { LimpiezaFacialService } from "@/modules/spa/services/LimpiezaFacialService";
import { ReduceMedidasService } from "@/modules/spa/services/ReduceMedidasService";
import { DiaDeSpaService } from "@/modules/spa/services/DiaDeSpaService";
import { CorporalCompletoService } from "@/modules/spa/services/CorporalCompletoService";
import { PaqueteReductorService } from "@/modules/spa/services/PaqueteReductorService";
import { PaqueteCelulitisService } from "@/modules/spa/services/PaqueteCelulitisService";
import { AltaFrecuenciaCapilarService } from "@/modules/spa/services/AltaFrecuenciaCapilarService";
import { DepilacionCeraService } from "@/modules/spa/services/DepilacionCeraService";

export const HomePage = () => {
  return (
    <>
        <Hero />
        <LimpiezaFacialService />
        <ReduceMedidasService />
        <DiaDeSpaService />
        <AltaFrecuenciaCapilarService />
        <DepilacionCeraService />
        <CorporalCompletoService />
        <PaqueteReductorService />
        <PaqueteCelulitisService /> 
    </>
  )
}


