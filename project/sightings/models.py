from django.db import models
from django.utils.translation import gettext as _

class Squirrel(models.Model):
    Latitude = models.FloatField(
            help_text=_('Latitude of Squirrels'),
            )
    Longitude = models.FloatField(
            help_text=_('Longitude of Squirrels'),
            )
    Unique_Squirrel_id = models.CharField(
            help_text=_('id of Squirrels'),
            max_length=100,
            )
    AM = 'AM'
    PM = 'PM'
    Shift_Choice = (
            (AM,'AM'),
            (PM,'PM'),
            )
    Shift = models.CharField(
            help_text=_('Whether the sighting happens in the morning or afternoon'),
            max_length=2,
            choices=Shift_Choice,
            default=AM,
            )
    Date = models.DateField(
            help_text=('Date'),
            )
    Adult = 'Adult'
    Juvenile = 'Juvenile'
    Other = 'Other'
    Age_Choice = (
            (Adult,'Adult'),
            (Juvenile,'Juvenile'),
            (Other, 'Other'),
            )
    Age = models.CharField(
            help_text=_('Type of Squirrels'),
            max_length=10,
            choices=Age_Choice,
            default=Juvenile,
            )
    Gray = 'Gray'
    Cinnamon = 'Cinnamon'
    Black = 'Black'
    Color_Choice = (
            (Gray,'Gary'),
            (Cinnamon,'Cinnamon'),
            (Black,'Black'),
            (Other, 'Other'),
            )
    Primary_Fur_Color = models.CharField(
            help_text=_('Color of Squirrels'),
            max_length=10,
            choices=Color_Choice,
            default=Cinnamon,
            )
    Gound_Plane = 'Ground Plane'
    Above_Plane = 'Above Plane'
    Location_Choice = (
            (Gound_Plane,'Ground Plane'),
            (Above_Plane,'Above Plane'),
            (Other, 'Other'),
            )
    Location = models.CharField(
            help_text=_('the location of where the squirrel was when first sighted'),
            max_length=15,
            choices=Location_Choice,
            default=Gound_Plane,
            )
    Specific_Location = models.CharField(
            help_text=_('squirrel location added by sighters'),
            max_length=256,
            )
    Running = models.BooleanField(
            help_text=_('Whether the squirrel was running'),
            default=False,
            )
    Chasing  = models.BooleanField(
            help_text=_('Whether the squirrel was chasing'),
            default=False,
            )
    Climbing = models.BooleanField(
            help_text=_('Whether the squirrel was climbing'),
            default=False,
            )
    Eating = models.BooleanField(
            help_text=_('Whether the squirrel was eating'),
            default=False,
            )
    Foraging = models.BooleanField(
            help_text=_('Whether the squirrel was foraging'),
            default=False,
            )
    Other_Activities = models.CharField(
            help_text=_('other activies added by sighters'),
            max_length=256,
            )
    Kuks = models.BooleanField(
            help_text=_('Whether the squirrel was heard kukking'),
            default=False,
            )
    Quaas = models.BooleanField(
            help_text=_('Whether the squirrel was heard quaaing'),
            default=False,
            )
    Moans = models.BooleanField(
            help_text=_('Whether the squirrel was heard moaning'),
            default=False,
            )
    Tail_Flags = models.BooleanField(
            help_text=_('Whether the squirrel was seen flagging its tail'),
            default=False,
            )
    Tail_Twitches = models.BooleanField(
            help_text=_('Whether the squirrel was seen twitching its tail'),
            default=False,
            )
    Approaches = models.BooleanField(
            help_text=_('Whether the squirrel was seen approaching to human'),
            default=False,
            )
    Indifferent = models.BooleanField(
            help_text=_('Whether the squirrel was indifferent to human presence'),
            default=False,
            )
    Runs_From = models.BooleanField(
            help_text=_('Whether the squirrel was seen running from humans'),
            default=False,
            )

    def __str__(self):
        return self.Unique_Squirrel_id
