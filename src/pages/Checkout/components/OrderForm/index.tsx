import * as ToggleGroup from '@radix-ui/react-toggle-group'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  WarningCircle,
} from 'phosphor-react'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { OrderAddressFormData } from '../..'

import {
  OrderContext,
  PAYMENT_METHODS,
} from '../../../../contexts/OrderContext'

import { defaultTheme } from '../../../../styles/themes/default'
import {
  ErrorMessage,
  Fieldset,
  FormCard,
  FormCardInformation,
  FormContainer,
  InputSeparator,
  OrderFormContainer,
  SelectInput,
  TextInput,
  ToogleContainer,
} from './styles'

export function OrderForm() {
  const { changePaymentMethod, paymentMethod } = useContext(OrderContext)
  const {
    register,
    formState: { errors },
  } = useFormContext<OrderAddressFormData>()

  return (
    <OrderFormContainer>
      <h3>Compete seu pedido</h3>
      <FormContainer>
        <FormCard>
          <FormCardInformation>
            <MapPinLine size={22} color={defaultTheme['yellow-dark']} />
            <div>
              <p>Endereço de entrega</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </FormCardInformation>
          <Fieldset>
            <TextInput
              type="text"
              id="zip"
              placeholder="CEP"
              {...register('zip')}
              isInputInvalid={Boolean(errors.zip)}
            />
            {errors.zip && (
              <ErrorMessage>
                <WarningCircle size={15} weight={'fill'} />
                <p>{errors.zip?.message}</p>
              </ErrorMessage>
            )}
            <TextInput
              type="text"
              id="street"
              placeholder="Rua"
              width={'100%'}
              {...register('street')}
              isInputInvalid={Boolean(errors.street)}
            />
            {errors.street && (
              <ErrorMessage>
                <WarningCircle size={15} weight={'fill'} />
                <p>{errors.street?.message}</p>
              </ErrorMessage>
            )}
            <InputSeparator>
              <div>
                <TextInput
                  type="text"
                  id="number"
                  placeholder="Número"
                  {...register('number')}
                  isInputInvalid={Boolean(errors.number)}
                />
                {errors.number && (
                  <ErrorMessage>
                    <WarningCircle size={15} weight={'fill'} />
                    <p>{errors.number?.message}</p>
                  </ErrorMessage>
                )}
              </div>
              <label htmlFor="complement">
                <TextInput
                  type="text"
                  id="complement"
                  placeholder="Complemento"
                  width={'100%'}
                  {...register('complement')}
                />
                <i>Opcional</i>
              </label>
            </InputSeparator>
            <InputSeparator>
              <div>
                <TextInput
                  type="text"
                  id="district"
                  placeholder="Bairro"
                  {...register('district')}
                  isInputInvalid={Boolean(errors.district)}
                />
                {errors.district && (
                  <ErrorMessage>
                    <WarningCircle size={15} weight={'fill'} />
                    <p>{errors.district?.message}</p>
                  </ErrorMessage>
                )}
              </div>
              <div>
                <TextInput
                  type="text"
                  id="city"
                  placeholder="Cidade"
                  width={'100%'}
                  {...register('city')}
                  isInputInvalid={Boolean(errors.city)}
                />
                {errors.city && (
                  <ErrorMessage>
                    <WarningCircle size={15} weight={'fill'} />
                    <p>{errors.city?.message}</p>
                  </ErrorMessage>
                )}
              </div>
              <SelectInput id="provincy" {...register('provincy')}>
                <option>AC</option>
                <option>AL</option>
                <option>AP</option>
                <option>AM</option>
                <option>BA</option>
                <option>CE</option>
                <option>DF</option>
                <option>ES</option>
                <option>GO</option>
                <option>MA</option>
                <option>MT</option>
                <option>MS</option>
                <option>MG</option>
                <option>PA</option>
                <option>PB</option>
                <option>PR</option>
                <option>PE</option>
                <option>PI</option>
                <option>RJ</option>
                <option>RN</option>
                <option>RS</option>
                <option>RO</option>
                <option>RR</option>
                <option>SC</option>
                <option>SP</option>
                <option>SE</option>
                <option>TO</option>
              </SelectInput>
            </InputSeparator>
          </Fieldset>
        </FormCard>
        <FormCard>
          <FormCardInformation>
            <CurrencyDollar size={22} color={defaultTheme.purple} />
            <div>
              <p>Pagamento</p>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </FormCardInformation>

          <Fieldset>
            <ToggleGroup.Root
              className="toggle-container"
              type="single"
              value={paymentMethod}
              onValueChange={(value: keyof typeof PAYMENT_METHODS) => {
                changePaymentMethod(value)
              }}
            >
              <ToggleGroup.Item className="toggle-item" value="credit">
                <CreditCard size={16} />
                CARTÃO DE CRÉDITO
              </ToggleGroup.Item>
              <ToggleGroup.Item className="toggle-item" value="debt">
                <Bank size={16} />
                CARTÃO DE DÉBITO
              </ToggleGroup.Item>
              <ToggleGroup.Item className="toggle-item" value="money">
                <Money size={16} />
                DINHEIRO
              </ToggleGroup.Item>
            </ToggleGroup.Root>
          </Fieldset>
        </FormCard>
      </FormContainer>
    </OrderFormContainer>
  )
}
