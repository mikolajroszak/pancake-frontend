import { useTranslation } from '@pancakeswap/localization'
import { Text, Flex, Box } from '@pancakeswap/uikit'
import { memo } from 'react'
import { StyledBox } from '../MyVeCakeCard'
import { VeCakeButton } from './VeCakeButton'

export const VeCakeUpdateCard: React.FC<{ isFlexibleStake?: boolean }> = memo(({ isFlexibleStake }) => {
  const { t } = useTranslation()
  return (
    <StyledBox mb="15px" p="10px" style={{ alignItems: 'center', gap: 10, flexDirection: 'column' }}>
      <Flex alignItems="center" style={{ gap: 10 }}>
        <img src="/images/cake-staking/token-vecake.png" alt="token-vecake" width="38px" />
        <Box>
          <Text color="white" bold fontSize={14} pr="20px">
            {isFlexibleStake
              ? t('This product have been upgraded to CAKE staking page.')
              : t(
                  'This product have been upgraded. Check out the brand new veCAKE for more CAKE staking benefits. Learn more',
                )}
          </Text>
        </Box>
      </Flex>
      {!isFlexibleStake && <VeCakeButton type="migrate" />}
    </StyledBox>
  )
})

export const VeCakeUpdateCardTableView: React.FC = memo(() => {
  const { t } = useTranslation()
  return (
    <StyledBox mb="15px" p="10px" style={{ alignItems: 'center', gap: 10, flexDirection: 'column' }}>
      <Flex alignItems="center" style={{ gap: 10 }}>
        <img src="/images/cake-staking/token-vecake.png" alt="token-vecake" width="38px" />
        <Box>
          <Text color="white" bold fontSize={14} pr="20px">
            {t(
              'This product have been upgraded. Check out the brand new veCAKE for more CAKE staking benefits. Learn more',
            )}
          </Text>
        </Box>
      </Flex>
    </StyledBox>
  )
})