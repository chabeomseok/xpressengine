<label class="__xe_df __xe_df_boolean __xe_df_boolean_{{$config->get('id')}}">{{$config->get('label')}}</label>
<input type="checkbox" name="{{$config->get('id') . 'Boolean'}}" class="form-control __xe_df __xe_df_boolean __xe_df_boolean_{{$config->get('id')}}" value="1" @if($boolean === 1) checked @endif />
