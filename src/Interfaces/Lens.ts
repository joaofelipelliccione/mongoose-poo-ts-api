import { z } from 'zod';

const lensSchema = z.object({
  degree: z.number({
    required_error: 'Degree is required.', // Mensagem lançada quando o campo 'degree' não for informado no body da requisição.
    invalid_type_error: 'Degree must be a number.', // Mensagem lançada quando o campo 'degree', informado no body da requisição, não for do tipo Number.
  }),
  antiGlare: z.boolean({
    required_error: 'AntiGlare is required.',
  }),
  blueLightFilter: z.boolean({
    required_error: 'BlueLightFilter is required.',
  }),
});

  type Lens = z.infer<typeof lensSchema>; // Criando, de forma explicita, um novo tipo. É como se tivéssemos criados uma interface "Lens", com os atributos "degree", "antiGlare" e "blueLightFilter".

export default Lens;
export { lensSchema };
